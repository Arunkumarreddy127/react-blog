import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Gallery = () => {

    const { data: blogs} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="blog-gallery aem-GridColumn aem-GridColumn--default--12">
            <section className="blog-gallery py-6 py-md-7 py-xl-8 pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        {blogs && blogs.slice(0, 3).map((blog) => (
                            <div className="blog-preview col-12 col-xl-4" key={blog.id}>
                                <Link to={`/blogs/${blog.id}`} 
                                className="w-100 mb-4 mb-md-5 pb-md-2 mb-lg-4 pb-lg-4 pb-xl-0 mb-xl-0 d-flex justify-content-center align-items-center">
                                    <div className="item position-relative w-100">
                                        <img src={blog.image} className="post-image w-100" alt={blog.title} />
                                        <h5 className="font-sofia-bold text-base-white position-absolute title px-3">
                                            {blog.title}
                                        </h5>
                                        <span className="category-label font-sofia-regular position-absolute d-inline-block py-1 px-2 py-md-2 px-md-3 text-base-white" style={{background: 'rgb(56, 100, 83)'}}>{blog.category}</span>
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
 
export default Gallery;