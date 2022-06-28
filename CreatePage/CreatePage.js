import { addPost } from '../services/post-services.js';
import { protectPage } from '../utils.js';

import createAddPostForm from '../components/AddPostForm.js';



async function handlePageLoad() {
    await protectPage();
    display();
}

async function handleAddPost(title, description, contact) {
    await addPost(title, description, contact);
    location.assign('/');
}

const AddPostForm = createAddPostForm(document.querySelector('#create-form'), { handleAddPost });

function display() {
    AddPostForm();
}

handlePageLoad();