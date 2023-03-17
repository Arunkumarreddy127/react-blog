import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const LatestPosts = () => {
    const url = 'http://localhost:8000/blogs';
    const { data: blogs} = useFetch(url);
    return ( 
        <div className="blog-recent-posts aem-GridColumn aem-GridColumn--default--12">
            <section className="blog-recent-post bg-base-gray py-4 py-xl-5 pt-0 pb-0">
                <div className="container">
                    <div className="row px-md-7 px-lg-1 m-lg-auto ml-xl-2 mr-xl-2  blog-recent-wrapper">
                        <div className="col-12">
                        <h2 className="font-sofia-bold text-base-black heading-title mt-2 pb-3 pb-lg-0 pb-xl-2 mb-4 text-center text-lg-left">Latest Posts</h2>
                        </div>
                        {blogs && blogs.slice(0, 4).map((blog) => (
                            <div className="col-md-6 mb-4 pb-2 px-md-2 col-xl-3">
                                <Link to={`/blogs/${blog.id}`} className="d-block">
                                    <div className="item m-auto">
                                        <figure className="img-wrapper mb-0">
                                            <img src={blog.image} alt="post-img" className="post-image" />
                                        </figure>
                                        <div className="item-content pr-md-5 pr-xl-3">
                                            <h6 className="font-sofia-bold mt-2 title blog-category--title" style={{color: 'rgb(0, 0, 0)'}}>{blog.category}</h6>
                                            <h6 className="headline font-sofia-bold text-base-black">{blog.title}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default LatestPosts;