import BlogItem from '../BlogItem/BlogItem';
import styles from './BlogList.module.scss';

const BlogList = () => {
  return (
    <div className={styles.BlogList}>
      <div className={styles.list_container}>
        <div className={styles.list__title}>
          <h2>Blog</h2>
        </div>
        <div className={styles.list}>
          <BlogItem
            key={1}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <BlogItem
            key={2}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <BlogItem
            key={3}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <BlogItem
            key={4}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
