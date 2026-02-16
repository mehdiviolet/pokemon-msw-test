import { delay, http, HttpResponse } from "msw";
import { mockItems } from "./data";
import { type JobStatusResponse } from "../Types/Pokemon";

const jobsDatabase = new Map();

export const handlers = [
  //Get items
  http.get("/api/items", async () => {
    delay(800);
    return HttpResponse.json(mockItems);
  }),

  //Get pokemon

  http.get("/api/items/:id", async ({ params }) => {
    const { id } = params;

    const pokemon = mockItems.find((item) => item.id === id);

    if (!pokemon) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json(pokemon);
  }),

  http.post("/api/items/:id/jobs", async () => {
    // const jobId = "job_abc123";
    const jobId = `job_${Date.now()}`;
    jobsDatabase.set(jobId, Date.now());
    console.log(jobsDatabase);

    return HttpResponse.json({ job_id: jobId });
  }),

  http.get("/api/jobs/:job_id", async ({ params }) => {
    const { job_id } = params;
    const createdAt = jobsDatabase.get(job_id);

    if (!createdAt) return new HttpResponse(null, { status: 404 });

    const elapsed = Date.now() - createdAt;

    if (elapsed < 1000) {
      return HttpResponse.json<JobStatusResponse>({
        status: "queued",
        progress: 0,
        health_points: null,
      });
    }

    if (elapsed < 5000) {
      if (Math.random() < 0.15) {
        return HttpResponse.json<JobStatusResponse>({
          health_points: null,
          status: "failed",
          progress: 0,
        });
      }
      const progress = Math.min(99, Math.floor((elapsed - 1000) / 4000) * 100);

      HttpResponse.json<JobStatusResponse>({
        status: "running",
        progress,
        health_points: null,
      });
    }

    const isDead = Math.random() < 0.5;
    const finalHp = isDead ? 0 : Math.floor(Math.random() * 100) + 1;
    HttpResponse.json<JobStatusResponse>({
      status: "done",
      progress: 100,
      health_points: finalHp,
    });
  }),
];
