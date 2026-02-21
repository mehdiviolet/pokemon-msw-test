import { useState, useRef, useEffect } from "react";
import { startBattleJob, getJobStatus } from "../services/pokemonService";
import { type JobStatus } from "../types/Pokemon";

// export const useBattle = (updateHp: (hp: number) => void) => {
export const useBattle = () => {
  const [status, setStatus] = useState<JobStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [battleResultHp, setBattleResultHp] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const stopPolling = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startBattle = async (pokemonId: string) => {
    stopPolling();

    try {
      setStatus("queued");
      setProgress(0);
      setError(null);
      setBattleResultHp(null);

      const { job_id } = await startBattleJob(pokemonId);

      const poll = async () => {
        try {
          const data = await getJobStatus(job_id);

          setStatus(data.status);
          setProgress(data.progress);

          if (data.status === "done") {
            setBattleResultHp(data.health_points);
            // if (data.status === "done" && data.health_points != null) {
            //   updateHp(data.health_points);
            // }
          } else if (data.status === "failed") {
            setError("Oops.. qualcosa è andato storto!");
          } else {
            timeoutRef.current = window.setTimeout(poll, 2000);
          }
        } catch (err) {
          setError("Errore di connessione");
          console.error(err);
        }
      };

      poll();
    } catch (err) {
      setError("Impossibile avviare la battaglia");
      setStatus("failed");
      console.error(err);
    }
  };

  useEffect(() => {
    return () => stopPolling();
  }, []);

  return { startBattle, status, progress, battleResultHp, error };
};
