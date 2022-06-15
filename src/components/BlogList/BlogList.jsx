import { useState, useEffect } from 'react';

import BlogItem from '../BlogItem/BlogItem';
import styles from './BlogList.module.scss';

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
        fetch('https://629b5d64656cea05fc37f64b.mockapi.io/reactblogapi/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

  return (
    <div className={styles.BlogList}>
      <div className={styles.list_container}>
        <div className={styles.list__title}>
          <h2>Blog</h2>
        </div>
        <div className={styles.list}>
          {
            posts.map(post => (
              <BlogItem
                key={post.id}
                id={post.id}
                title={post.title}
                descrip={post.body}
                date={post.date}
                type={post.type}
                img={post.img}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogList;
