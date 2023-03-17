import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="blog-header aem-GridColumn aem-GridColumn--default--12">
             <div className="sophia-blog-header bg-base-white-off position-fixed w-100 d-flex  align-items-center">
                <div className="container">
                   <nav className="navbar navbar-expand-xl navbar-light w-100  justify-content-between">
                      <div className="logo">
                         <Link className="navbar-brand mr-1 " to="/">
                         <img className=" lazyloaded" data-src="https://www.sophia.org/content/dam/sophia/blog/Sophia_Blog_Logo.svg" alt="Sophia Blog" src="https://www.sophia.org/content/dam/sophia/blog/Sophia_Blog_Logo.svg" />
                         </Link>
                      </div>
                      <div className="mid-nav ml-auto ml-xl-0 mr-3 mr-md-5 mr-xl-0">
                         <span className="category-close  position-fixed"><img src="https://www.sophia.org/content/dam/sophia/sophia-blog/blog-menu-close.svg" alt="close" /></span>
                         <div className="mid-nav__child h-100">
                            <div className="duplicate-trial justify-content-center w-100 mt-5">
                               <a className="px-3 btn d-block d-md-inline-block mb-2 mb-xl-0 py-1 py-md-2  btn btn-white-gray-border" href="/free-trial" data-km-type="cta" data-km-value="start-free-trial">
                               <span>Start free trial</span>
                               </a>
                            </div>
                         </div>
                      </div>
                      <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-hamburger navbar-icon w-100"><img src="https://www.sophia.org/content/dam/sophia/sophia-blog/blog-menu-hamburger.svg" alt="hamburger" data-km-type="icon" data-km-value="hamburger" /></span>
                      <span className="navbar-close navbar-icon w-100"><img src="https://www.sophia.org/content/dam/sophia/sophia-blog/blog-menu-close.svg" alt="close" /></span>
                      </button>
                      <div className="right-nav collapse navbar-collapse" id="navbarNavDropdown">
                         <Link to="/allblogs" className="py-0 free-trial-link btn d-flex mt-2 mt-xl-0 mr-xl-2 justify-content-center align-items-center px-0 btn btn-white-gray-border">
                         <span>All Blogs</span>
                         </Link>
                         <Link to="/create" style={{padding: '0'}} className="back-sofia-link mb-4 mb-xl-0 font-sofia-regular d-flex justify-content-center align-items-center py-0 ml-xl-2 btn btn-primary-with-arrow">
                         Create Blog
                         </Link>
                      </div>
                   </nav>
                </div>
             </div>
          </div>
     );
}
 
export default Header;