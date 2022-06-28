// import services and utilities
import { getPosts } from './services/post-services.js';

// import component creators
import createPostList from './components/PostList.js';

// declare state variables  
let postList = [];

// write handler functions
async function handlePageLoad() {
    console.log(postList);
    postList = await getPosts();
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const PostList = createPostList(document.querySelector('#post-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PostList({ postList });
}

// Call display on page load
handlePageLoad();
