import { Queue, Worker } from "bullmq";

const myQueue = new Queue("my-queue");

const worker = new Worker("my-queue", async (job) => {
  /* TBD */
});

async function _example_calls() {
  await myQueue.add("send-email", {
    to: "bar@email.com",
    title: "Coucou",
    textBody: "",
  });

  await myQueue.add("send-email", {
    to: "bar@email.com",
    titlee: "Coucou",
  });

  await myQueue.add("send-slack", { channelId: "42e2a32", content: "Coucou" });
}

function sendJob(/* TBD */) {}
