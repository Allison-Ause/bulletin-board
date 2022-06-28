
import { getPosts } from './services/post-services.js';

import createPostList from './components/PostList.js';


let postList = [];


async function handlePageLoad() {
    postList = await getPosts();
    display();
}

const PostList = createPostList(document.querySelector('#post-list'));

function display() {
    PostList({ postList });
}

// Call display on page load
handlePageLoad();
