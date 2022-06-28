

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

    const title = document.createElement('span');
    title.textContent = post.title;

    const description = document.createElement('span');
    description.textContent = post.description;

    const contact = document.createElement('span');
    contact.textContent = post.contact;

    const created_at = document.createElement('span');
    created_at.textContent = post.created_at; 

    div.append(title, description, contact, created_at);

    return div;
}

// david shared this text: (new Date(bulletin.createdAt)).toLocaleString()