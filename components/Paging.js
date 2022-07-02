

export default function createPaging(root, { handlePaging }) {
    const selectSize = root.querySelectorAll('select');
    const [prev, next] = root.querySelectorAll('button');
    const pageInfo = root.querySelector('.page-info');

    prev.addEventListener('click', () => {
        handlePaging(-1, selectSize.value);
    });

    next.addEventListener('click', () => {
        handlePaging(1, selectSize.value);
    });

    selectSize.addEventListener('change', () => {
        handlePaging(0, selectSize.value);
    });

    return ({ page, pageSize, totalPages }) => {
        selectSize.value = pageSize;
        prev.disabled = page === 1;
        next.disabled = page === totalPages;

        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    };
}