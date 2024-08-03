// JavaScript for details.html

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`); // corrected URL
        if (!res.ok) {
            throw new Error('Network response was not ok.');
        }
        const post = await res.json();

        const template = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `;

        container.innerHTML = template;
    } catch (error) {
        console.error('Error fetching data:', error);
        // You might want to handle the error or display a message to the user
    }
};

window.addEventListener('DOMContentLoaded', () => renderDetails());
