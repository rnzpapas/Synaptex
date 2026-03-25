import express from 'express';
import cors from 'cors';
import supabase from './lib/supabase.js';
import { env } from "./config/env.js";

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'API running 🚀' });
});


app.get('/users', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('user')
            .select('*');

        if (error) throw error;

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;

        const { data, error } = await supabase
            .from('user')
            .insert([{ name, email }])
            .select();

        if (error) throw error;

        res.json(data[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = env.PORT;
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});