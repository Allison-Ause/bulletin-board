
import { getPosts } from './services/post-services.js';
import { signIn, signUp } from '../services/post-services.js';


import createPostList from './components/PostList.js';
import createAuthForm from './components/AuthForm.js';


let postList = [];


async function handlePageLoad() {
    postList = await getPosts();
    display();
}

async function handleSignIn(email, password) {
    const response = await signIn(email, password);
    console.log(response);
    // checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
}

async function checkAuth(response) {

    if (response.error) {
        console.log(response.error);
        return;
    }
    // else {
    //     location.replace('../CreatePage');
    // }
}

const SignInForm = createAuthForm(
    document.querySelector('#sign-in'), 
    { handleAuth: handleSignIn });

const SignUpForm = createAuthForm(
    document.querySelector('#sign-up'),
    { handleAuth: handleSignUp });


const PostList = createPostList(document.querySelector('#post-list'));


function display() {
    PostList({ postList });
    SignInForm();
    SignUpForm();
}

// Call display on page load
handlePageLoad();
