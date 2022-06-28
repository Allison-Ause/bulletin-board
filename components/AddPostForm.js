
export default function createAddPostForm(form, { handleAddPost }) {
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        handleAddPost(
            formData.get('title'),
            formData.get('description'),
            formData.get('contact'),
        );
    });
    return () => {
        
    };
}