


import { Hono } from 'hono';
import { handle } from 'hono/vercel';


export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get(
  '/hello',
  (c) => {
    return c.json({ hello: 'world' });
  }
);

export default handle(app);
