import { useState, useEffect } from 'react';

import BlogItem from '../BlogItem/BlogItem';
import styles from './BlogList.module.scss';

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
        fetch('http://localhost:3001/api/post')
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
                date={post.dat}
                type={post.typ}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogList;
