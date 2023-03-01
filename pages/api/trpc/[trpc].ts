// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter } from '../router';
import { createContext } from '../router/context';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
});

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Modify `req` and `res` objects here
//   // In this case, we are enabling CORS
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   // If you need to make authenticated CORS calls then
//   // remove what is above and uncomment the below code
//   // Allow-Origin has to be set to the requesting domain that you want to send the credentials back to
//   // res.setHeader('Access-Control-Allow-Origin', 'http://example:6006');
//   // res.setHeader('Access-Control-Request-Method', '*');
//   // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//   // res.setHeader('Access-Control-Allow-Headers', 'content-type');
//   // res.setHeader('Referrer-Policy', 'no-referrer');
//   // res.setHeader('Access-Control-Allow-Credentials', 'true');
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200);
//     return res.end();
//   }
//   // pass the (modified) req/res to the handler
//   return nextApiHandler(req, res);
// }
