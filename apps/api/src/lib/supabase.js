import { env } from '../config/env.js';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
    env.SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        },
    }
);

export default supabase;