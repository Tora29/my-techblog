import { supabase } from '$lib/supabase';
import { json } from '@sveltejs/kit';

export async function GET() {
	const { data, error } = await supabase.from('test_datas').select('*');

	if (error) {
		console.error('Supabase error:', error);
		return json({ error: 'Failed to fetch data' }, { status: 500 });
	}

	return json(data);
}
