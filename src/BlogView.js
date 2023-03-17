import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogView = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blog-details">
                    <div className="blog-view aem-GridColumn aem-GridColumn--default--12">
                        <section className="blog-view pt-6 pb-8 pb-md-5">
                            <div className="container px-md-5 position-relative">
                                <div className="row mx-0 align-items-start">
                                    <div className="blog-left">
                                    <div className="blog-view__head mb-4 mb-md-5">
                                        <h1 className="font-sofia-bold text-base-black title text-center text-md-left">
                                        {blog.title}
                                        </h1>
                                        <div className="feature-image d-flex mt-3 mt-md-5 mb-2 mb-md-1 flex-column ">
                                            <figure className="m-0 feature-image__wrapper blog-banner-image">
                                                <img className="w-100 blog-hero-image" src={blog.image} alt={blog.title} />
                                            </figure>
                                        </div>
                                        <div className="date">
                                            <p className="d-flex text-base-black mb-2 mb-lg-2">Posted on
                                                January 25, 2022
                                            </p>
                                        </div>
                                        <div className="by-line mb-3 mb-md-5 mb-xl-6">
                                        </div>
                                    </div>
                                    <div className="blog-view__body">
                                        <div className="pr-md-5 d-flex flex-column flex-lg-row">
                                            <div className="col-12">
                                                <div className="blog-content">
                                                <div>
                                                    <div className="limited-rte">
                                                        <div className="custom-limited-vc-rte ">
                                                            {blog.body}
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="blog-category">
                                                <p className=" text-base-black font-sofia-light">Category: <span className="text-base-black font-sofia-light">{blog.category}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <button onClick={handleClick} style={{color: 'red', background: 'white', border: '1px solid red', borderRadius: '4px', padding: '5px 12px'}}>Delete</button>
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogView;