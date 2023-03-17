import BlogSlider from "./BlogSlider";
import Gallery from "./Gallery";
import LatestPosts from "./LatestPosts";

const Home = () => {
    return (
        <div className="container">
            <Gallery />
            <LatestPosts />
            <BlogSlider category="Higher Education" limit="3"/>
            <BlogSlider category="Student Success" limit="3"/>
            <BlogSlider category="Course Development" limit="3"/>
        </div>
    );
}
export default Home;