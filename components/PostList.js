

export default function createPostList(root) {
    
    return ({ postList }) => {
        root.innerHTML = '';
        
        for (const post of postList) {
            const li = Post({ post });
            root.append(li);
        }
    };
}

function Post({ post }) {
    const div = document.createElement('div');
    div.classList.add('post');

    const title = document.createElement('h3');
    title.textContent = post.title;

    const description = document.createElement('span');
    description.textContent = post.description;

    const contact = document.createElement('span');
    contact.textContent = post.contact;

    const niceDate = (new Date(post.created_at)).toLocaleString();

    const created_at = document.createElement('p');
    created_at.textContent = niceDate; 

    div.append(title, description, contact, created_at);

    return div;
}
