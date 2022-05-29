import styles from './WorksList.module.scss';

import { useState, useEffect } from 'react';

import WorksItem from '../WorksItem/WorksItem';

const WorksList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className={styles.WorksList}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.title}>
            <h3>Works</h3>
          </div>
          <div className={styles.list}>
            {posts.map(post => (
              <WorksItem key={post.id} id={post.id} title={post.title} descrip={post.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksList;
