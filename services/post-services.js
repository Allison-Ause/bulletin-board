const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signIn(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signUp(email, password) {
    console.log('I would sign in', email, password);
    return await client.auth.signUp({ email, password });
}


export async function getPosts() {
    const response = await client.from('posts').select('*').order('created_at', { ascending: false });

    return response.data;
}

export async function addPost(title, description, contact, created_at) {
    const response = await client
        .from('posts')
        .insert([{
            title,
            description,
            contact,
            created_at
        }])
        .single();

    return response;
}