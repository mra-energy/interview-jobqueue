import { Redis } from "ioredis";
import { Queue, Worker } from "bullmq";

const redisUrl = process.env.JOBQUEUE_REDIS_URL ?? "redis://localhost:6379";
const redisClient = new Redis(redisUrl, { maxRetriesPerRequest: null });
const myQueue = new Queue("my-queue", { connection: redisClient });

const worker = new Worker(
  "my-worker",
  async (job) => {
    console.log(job.name, job.data);
  },
  { connection: redisClient },
);

worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});

async function addJobs() {
  await myQueue.add("some-random-job", { foo: "bar" });
  await myQueue.add("another-job", { qux: "baz" });
}

await addJobs();
