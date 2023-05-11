import { router } from "@/server/initTrpc";
import { radha } from "@/server/routers/radha";

export const appRouter = router({
    radha,
});

export type AppRouter = typeof appRouter;
