# Ecair backend interview

You're setting up a job queue system that's meant to be used by multiple devs, including junior ones.
Here's a minimally working codebase that's using BullMQ, a Redis backed job queue.
Fortunately for our purposes, this solution is very poorly typed.

## _Mise en jambe_

```shell
# using node:22 and pnpm, but any modern js runtime and package manager should do
pnpm i
pnpm tsc
docker run -it -p 6379:6379 redis
pnpm start
```

Add two jobs, e.g. `createUser` which has a payload of `{ name: string }` and `deleteUser` with `{ id: string }` and execute them, e.g. let's say on user creation we want to log "hello" and on deletion "byebye"

## Making things safe and easy

Make it easy to declare new jobs and send them: you don't want your juniors to be exposed to scary notions like "queues" and "workers"
