// Supabase Clientを初期化
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// SUPABASE_KEY がundefined の場合エラーとする
if (!supabaseUrl || !supabaseKey) {
	throw new Error('SUPABASE_URL or SUPABASE_KEY is not defined.');
}

export const supabase = createClient(supabaseUrl as string, supabaseKey as string);
