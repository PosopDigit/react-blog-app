import FeaturedWorks from "../components/FeaturedWorks/FeaturedWorks";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import RecentPosts from "../components/RecentPosts/RecentPosts";



const HomePage = () => {
    return (
        <div>
            <HeaderHome />
            <RecentPosts />
            <FeaturedWorks/>
        </div>
    );
}

export default HomePage;