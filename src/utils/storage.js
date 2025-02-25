const LIKES_KEY = 'social-network-likes';

export function getLikes() {
    return JSON.parse(localStorage.getItem(LIKES_KEY) || '{}');
}

export function toggleLike(postId) {
    const likes = getLikes();
    const newLikes = { ...likes, [postId]: !likes[postId] };
    localStorage.setItem(LIKES_KEY, JSON.stringify(newLikes));
    return newLikes;
}
