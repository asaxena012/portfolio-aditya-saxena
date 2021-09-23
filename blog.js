const blogHeadings = document.querySelectorAll('.blog-heading');
const blogDates = document.querySelectorAll('.blog-date');
const blogBriefs = document.querySelectorAll('.blog-brief');
const blogHyperlinks = document.querySelectorAll('.blog-hyperlink');

const getHashnodeURL = (slug) => {
    return `https://adityasaxena.hashnode.dev/${slug}/`
}

const updateUI = (posts) => {
    posts.forEach((post, i) => {
        blogHeadings[i].textContent = post.title;
        blogDates[i].textContent = new Date(post.dateAdded).toDateString();
        blogBriefs[i].textContent = post.brief;
        blogHyperlinks[i].href = getHashnodeURL(post.slug);
    })
}

fetch('./blogData.json').then((res) => res.json()).then((data) => {
    updateUI(data.posts.filter((post) => post.isActive).reverse());
});
