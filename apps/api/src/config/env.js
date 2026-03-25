import dotenv from 'dotenv';

dotenv.config();

function required(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

export const env = {
    PORT: process.env.PORT || 4000,
    SUPABASE_URL: required('SUPABASE_API_URL'),
    SUPABASE_SERVICE_ROLE_KEY: required('SUPABASE_SERVICE_ROLE_KEY'),
    SUPABASE_JWT: required('SUPABASE_JWT'),
};