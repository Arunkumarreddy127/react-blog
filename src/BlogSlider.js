import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogSlider = ({ category, limit }) => {
    let url = 'http://localhost:8000/blogs';
    if (category!=null) {
        url = 'http://localhost:8000/blogs?category=' + category;
    } else {
        category = "All Blogs!";
    }
    const { data: blogs} = useFetch(url);
    if (blogs && limit == null){
        limit = blogs.length;
    }
    
    return ( 
        <div className="blog-slider aem-GridColumn aem-GridColumn--default--12">
            <section className="blog-slider  pt-7">
                <div className="container pt-0 pb-0 adjust-tablet-padding">
                    <div className="row flex-column">
                        <div className="slider-wrapper w-100 m-auto px-5 px-md-0">
                        <h4 className="h4 title font-sofia-bold px-lg-5 mb-4 blog-category--title text-center text-lg-left" style={{color: 'rgb(0, 0, 0)'}}>{category}</h4>
                        <div className="m-auto blog-slider-box px-lg-5 w-100 position-relative slick-initialized slick-slider">
                            <div className="slick-list draggable">
                                <div style={{opacity: '1', width: '1104px', transform: 'translate3d(0px, 0px, 0px'}}>
                                    {blogs && blogs.slice(0, limit).map((blog) => (
                                        <div key={blog.id} className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{width: '368px'}}>
                                            <div>
                                                <div className="slider-box__item  w-100 px-1 pb-2" style={{width: '100%', display: 'inline-block'}}>
                                                    <Link to={`/blogs/${blog.id}`} className="content card p-4 pb-5 position-relative">
                                                        <span className="d-none url-reference" data-href="/content/sophia/en/blog/courses-development/3-reasons-students-love-sophias-online-business-courses.html" title="/content/sophia/en/blog/courses-development/3-reasons-students-love-sophias-online-business-courses.html"></span>
                                                        <figure className="img-wrapper">
                                                        <img typeof="foaf:Image" src={blog.image} alt="" className="mb-2 w-100" />
                                                        </figure>
                                                        <div className="content-box">
                                                        <h3 className="h3 content-box__title font-sofia-bold text-base-black">
                                                        {blog.title}
                                                        </h3>
                                                        <div className="text-base-black font-sofia-regular blog-content">
                                                            {blog.body}
                                                        </div>
                                                        <span className="read-more d-block text-base-black position-absolute">Read more</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
     );
}
 
export default BlogSlider;