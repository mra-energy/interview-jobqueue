import { Redis } from "ioredis";
import { Queue, Worker } from "bullmq";

const redisUrl = process.env.JOBQUEUE_REDIS_URL ?? "redis://localhost:6379";
const redisClient = new Redis(redisUrl, { maxRetriesPerRequest: null });
const myQueue = new Queue("foo", { connection: redisClient });

const worker = new Worker(
  "foo",
  async (job) => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
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
  await myQueue.add("myJobName", { foo: "bar" });
  await myQueue.add("myJobName", { qux: "baz" });
}

await addJobs();
