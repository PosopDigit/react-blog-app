import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from '../scss/components/WorkSinglePage.module.scss'

const WorkSinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://629b5d64656cea05fc37f64b.mockapi.io/reactblogapi/works/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            {post && (
                <div className={styles.WorkSinglePage}>
                    <div className="container">
                        <div className={styles.inner}>
                            <h1>{post.title}</h1>
                            <div className={styles.dateType}>
                                <p className={styles.date}>{post.date}</p>
                                <p className={styles.type}>{post.type}</p>
                            </div>
                            <img src={post.img} alt=""  className={styles.img} />
                            <p className={styles.descrip}>{post.body}</p>
                            <img src={post.imgsec} alt=""  className={styles.img} />
                            <p className={styles.descrip}>{post.bodysec}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export {WorkSinglePage};