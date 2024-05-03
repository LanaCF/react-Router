import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => console.error('Помилка отримання даних:', error));
    }, []);

    return (
        <div className='posts-page'>
            <h1>Blog</h1>

            <div className="posts">
                <h2 className='post__title'>Post list</h2>
                <ul className="posts__list">
                    {
                        posts.map(post => (
                            <li key={ post.id } className='post'>
                                <Link to={ `${ post.id }` }>
                                    <h3 className='post__title'>{ post.title }</h3>
                                    <p className="post__body">{ post.body }</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Blog;