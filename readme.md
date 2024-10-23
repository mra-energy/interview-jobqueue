# Ecair backend interview

## _Mise en jambe_

```shell
# using node:22 and pnpm, but any modern js runtime and package manager should do
pnpm i
pnpm tsc
docker run -it -p 6379:6379 redis
pnpm start
```

## Task 1

You're setting up a job queue system that's meant to be used by multiple devs, including junior ones.
Here's a minimally working codebase that's using BullMQ, a Redis backed job queue.
Fortunately for our purposes, this solution is very poorly typed.

Your task is to:

1. build two jobs, e.g. `createUser` which has a payload of `{ name: string }` and `deleteUser` with `{ id: string }` and execute them, e.g. let's say on user creation we want to log "hello" and on deletion "byebye"
2. make it typesafe to send and handle jobs
3. make it easy to declare new jobs and send them: you don't want your juniors to be exposed to scary notions like "queues" and "workers"

## Task 2

Switching gears, we'll discard the job queue that implements something we're interested in recreating in this exercise: retry safety (idempotency).

We expect users to make the same query twice when it fails: make it safe to retry (idempotent) - see `task2.ts`.

```shell
pnpm tsx task2.ts
```
