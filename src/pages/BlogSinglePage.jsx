import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from '../scss/components/BlogSinglePage.module.scss'

const BlogSinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://629b5d64656cea05fc37f64b.mockapi.io/reactblogapi/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            {post && (
                <div className={styles.BlogSinglePage}>
                    <div className="container">
                        <div className={styles.inner}>
                            <h1>{post.title}</h1>
                            <div className={styles.dateType}>
                                <p className={styles.date}>{post.date}</p>
                                <p className={styles.type}>{post.type}</p>
                            </div>
                            <img src={post.img} alt="" />
                            <p className={styles.descrip}>{post.body}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export {BlogSinglePage};