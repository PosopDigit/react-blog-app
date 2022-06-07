import { Link } from 'react-router-dom';
import LastBlogItem from '../LastBlogItem/LastBlogItem';
import styles from './RecentPosts.module.scss';
import { useState, useEffect } from 'react';

const RecentPosts = () => {
  const [posts, setPosts] = useState([])
  const sortposts = posts.slice(1,3)

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

  return (
    <div className={styles.RecentPosts}>
      <div className="container">
        <div className={styles.sec__header}>
          <h3>Recent posts</h3>
          <Link to="/blog">View all</Link>
        </div>
        <div className={styles.sec__list}>
          {
            sortposts.map(post => (
              <LastBlogItem
                key={post.id}
                id={post.id}
                title={post.title}
                descrip={post.body}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
