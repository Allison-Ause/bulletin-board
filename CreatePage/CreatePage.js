import { addPost } from '../services/post-services.js';
import { protectPage } from '../utils.js';

import createAddPostForm from '../components/AddPostForm.js';


let user = null;

async function handlePageLoad() {
    user = await protectPage();
    display();
}

async function handleAddPost(title, description, contact, created_at) {
    await addPost(title, description, contact, created_at);
    location.assign('/');
}

const AddPostForm = createAddPostForm(document.querySelector('#create-form'), { handleAddPost });

function display() {
    AddPostForm();
}

// call display on pageload
handlePageLoad();