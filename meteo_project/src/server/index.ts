import { z } from "zod";

import { db } from "@/lib/prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getData: publicProcedure.query(async () => {
    const data = await db.axis.findMany();
    return data;
  }),
});
// This type will be used as a reference later...
export type AppRouter = typeof appRouter;
