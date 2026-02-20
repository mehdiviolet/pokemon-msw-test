import { delay, http, HttpResponse } from "msw";
import { mockItemDetails, mockItems } from "./data";

// 1. Definiamo che la mappa contiene 'shouldFail' (il destino deciso all'inizio)
const jobsDatabase = new Map<
  string,
  { createdAt: number; shouldFail: boolean }
>();

export const handlers = [
  http.get("/api/items", async () => {
    await delay(800);
    return HttpResponse.json(mockItems);
  }),

  http.get("/api/items/:id", async ({ params }) => {
    const { id } = params;
    const pokemon = mockItemDetails.find((item) => item.id === id);
    if (!pokemon) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(pokemon);
  }),

  http.post("/api/items/:id/jobs", async () => {
    const jobId = `job_${Date.now()}`;

    // const shouldFail = Math.random() < 0.3;
    const shouldFail = true;
    jobsDatabase.set(jobId, {
      createdAt: Date.now(),
      shouldFail,
    });
    return HttpResponse.json({ job_id: jobId });
  }),

  http.get("/api/jobs/:job_id", async ({ params }) => {
    const jobId = params.job_id;
    if (!jobId) return new HttpResponse(null, { status: 404 });

    const jobData = jobsDatabase.get(jobId as string);
    if (!jobData) return new HttpResponse(null, { status: 404 });
    // if (!createdAt) jobsDatabase.set(jobId, { createdAt: Date.now() });
    const elapsed = Date.now() - jobData.createdAt;
    if (elapsed < 1000) {
      return HttpResponse.json({
        status: "queued",
        progress: 0,
        health_points: null,
      });
    }
    if (elapsed < 5000) {
      if (jobData.shouldFail && elapsed > 2500) {
        return HttpResponse.json({
          status: "failed",
          progress: 65,
          health_points: null,
        });
      }
      const rawProgress = ((elapsed - 1000) / 4000) * 100;
      const progress = Math.min(99, Math.floor(rawProgress));

      return HttpResponse.json({
        status: "running",
        progress,
        health_points: null,
      });
    }

    if (jobData.shouldFail) {
      return HttpResponse.json({
        status: "failed",
        progress: 65,
        health_points: null,
      });
    }

    const finalHp = Math.floor(Math.random() * 101);
    return HttpResponse.json({
      status: "done",
      progress: 100,
      health_points: finalHp,
    });
  }),
];
