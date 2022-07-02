
import { getPosts } from './services/post-services.js';

import createPostList from './components/PostList.js';
import createPaging from './components/Paging.js';

let postList = [];
let page = 1;
let pageSize = 6;
let totalPages = '';

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    page = Number(params.get('page')) || 1;
    pageSize = Number(params.get('pageSize')) || 6;

    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;

    const { data, count } = await getPosts({ start, end });
    postList = data;

    totalPages = Math.ceil(count / pageSize);

    display();
}

function handlePaging(change, size) {

    if (Number(size) === pageSize) {
        page = Math.max(1, page + change);
    } else {
        page = 1;
    }
    const params = new URLSearchParams(window.location.search);
    page = Math.max(1, page + change);

    params.set('page', page);
    params.set('pageSize', size);

    window.location.search = params.toString();
}

const PostList = createPostList(document.querySelector('#post-list'));
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });

function display() {
    Paging({ page, pageSize, totalPages });
    PostList({ postList });
}

// Call display on page load
handlePageLoad();
