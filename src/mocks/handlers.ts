import { http, HttpResponse } from "msw";
import { mockItemDetails, mockItems } from "./data";
import type { JobStatus } from "../types/Pokemon";

const jobDatabase = new Map<
  string,
  {
    createdAt: number;
    hasFailed?: boolean;
  }
>();

interface JobResponse {
  status: JobStatus;
  progress: number;
  health_points: number | null;
}
export const handlers = [
  http.get("/api/items", async () => {
    return HttpResponse.json(mockItems);
  }),

  http.get("/api/items/:id", async ({ params }) => {
    const { id } = params;
    if (!id) return new HttpResponse(null, { status: 404 });

    const pokemon = mockItemDetails.find((item) => item.id === id);

    if (!pokemon) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(pokemon);
  }),

  http.post("/api/items/:id/jobs", async () => {
    const jobId = `job_${Date.now()}`;

    jobDatabase.set(jobId, {
      createdAt: Date.now(),
      hasFailed: false,
    });

    return HttpResponse.json({ job_id: jobId });
  }),

  http.get("/api/jobs/:job_id", async ({ params }) => {
    const jobId = params.job_id;
    if (!jobId) return new HttpResponse(null, { status: 404 });

    const jobData = jobDatabase.get(jobId as string);
    if (!jobData) return new HttpResponse(null, { status: 404 });

    const elapsed = Date.now() - jobData.createdAt;

    if (elapsed < 1000) {
      return HttpResponse.json<JobResponse>({
        status: "queued",
        progress: 0,
        health_points: null,
      });
    }

    if (jobData.hasFailed) {
      return HttpResponse.json<JobResponse>({
        status: "failed",
        progress: 65,
        health_points: null,
      });
    }

    if (elapsed < 5000) {
      const rowProgress = ((elapsed - 1000) / 4000) * 100;
      const progress = Math.min(99, Math.floor(rowProgress));

      if (elapsed > 2500) {
        // jobData.hasFailed = Math.random() > 0.5;
        jobData.hasFailed = false;
      }
      return HttpResponse.json<JobResponse>({
        status: "running",
        progress,
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
