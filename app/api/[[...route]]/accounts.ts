
import {Hono} from 'hono';
import {db} from '@/db/drizzle';
import {accounts} from '@/db/schema';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { getActiveResourcesInfo } from 'process';
import {HTTPException} from 'hono/http-exception';
import { eq } from 'drizzle-orm';
import { error } from 'console';


const app = new Hono()
.get(
    '/', 
    clerkMiddleware(),
    
    async(c)=>{

        const auth = getAuth(c);
        
        if(!auth?.userId){
            
            return c.json({ error: "Unauthorized"}, 401);
        }


        const data = await db
        .select({
            id: accounts.id,
            name: accounts.name,
        })
        .from(accounts)
        .where(eq(accounts.userId, auth.userId));
        
        return c.json({data});
});

export default app;