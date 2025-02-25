import './style.css'
import { getUserPosts } from './utils/api'
import { getLikes, toggleLike } from './utils/storage'    


export async function renderHome() {
    const app = document.getElementById('app');
    const posts = await getUserPosts();
    const likes = getLikes();


    app.addEventListener('click', async (e) => {
        if (e.target.classList.contains('like-btn')) {
            const postId = parseInt(e.target.dataset.id);
            const newLikes = toggleLike(postId);
            e.target.classList.toggle('liked');
            e.target.innerHTML = newLikes[postId]? 'Unlike' : 'Like';
        }

})

    app.innerHTML = `
    <main class="container">
        ${posts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button type="button" class="btn btn-dark">
                <button class="like-btn" data-id="${post.id}"> 
                    ${likes[post.id] ? 'Unlike' : 'Like'} 
                </button>
            </div>
        `).join('')}
    </main>`; // Se cierra correctamente el main
}

renderHome();

