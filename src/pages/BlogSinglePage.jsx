import { useParams } from "react-router-dom";

const BlogSinglePage = () => {
    const {id} = useParams()

    return (
        <div>
            {id}
        </div>
    );
}
 
export {BlogSinglePage};