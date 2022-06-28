const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getPosts() {
    const response = await client.from('posts').select('*').order('created_at', { ascending: false });

    return response.data;
}

export async function addPost(title, description, contact) {
    const response = await client
        .from('posts')
        .insert([{
            title,
            description,
            contact
        }])
        .single();

    return response;
}