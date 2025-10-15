/**
 * This file contains the edge router of AWAI tRPC-backend
 */
import { publicProcedure, router } from '@/libs/trpc/edge';

import { uploadRouter } from './upload';

export const edgeRouter = router({
  healthcheck: publicProcedure.query(() => "i'm live!"),
  upload: uploadRouter,
});

export type EdgeRouter = typeof edgeRouter;
