import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Помилка отримання даних про пост:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-post-page">
            <h1 className="single">Single page</h1>
            <Link to="/blog">
                <button className='btn-back'>
                    Back to blog
                </button>
            </Link>

            <hr />

            <div className="post">
                <h3 className="post__title">{ post.title }</h3>
                <p className="post__body">{ post.body }</p>
            </div>
        </div>
    );
};