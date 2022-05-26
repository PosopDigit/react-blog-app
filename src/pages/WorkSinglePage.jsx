import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from '../scss/components/WorkSinglePage.module.scss'

const WorkSinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null);

    const imgs = [
        {img: "https://picsum.photos/850/580?random=1"},
        
    ]

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
                                <p className={styles.date}>2020</p>
                                <p className={styles.type}>Dashboard, User Experience Design</p>
                            </div>
                            {
                                imgs.map(img => (
                                    <>
                                        <img src={img.img} alt="" />
                                    </>
                                ))
                            }
                            <p className={styles.descrip}>{post.body}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export {WorkSinglePage};