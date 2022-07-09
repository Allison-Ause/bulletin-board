import { getUser } from './services/post-services.js';


export async function protectPage() {
    const user = await getUser();
    if (!user) {
        location.replace('../AuthPage');
        return;
    }
    return user;
}