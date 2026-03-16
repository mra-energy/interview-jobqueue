# Ecair backend interview

You're setting up a job queue system that's meant to be used by multiple devs, including junior ones.

Here's a minimally working codebase that's using BullMQ, a Redis backed job queue.

Fortunately for our purposes, this solution is very poorly typed.

## Making things safe and easy

**Make it easy to declare new jobs and send them**: you don't want your juniors to be exposed to scary notions like "queues" and "workers".

One objective: reach an interface where one can "just" invoke a single well defined function to send jobs.

We expect payloads to be validated, etc.

## Bonus: Batching

We now want to introduce a new type of job, `forward-events` which we expect to launch only under certain criteria, e.g. every 50 items.
