const Footer = () => {
    return ( 
        <div className="footer aem-GridColumn aem-GridColumn--default--12">
            <div className="sophia-footer__container position-relative pt-5 pb-3">
                <div className="scroll-to--top d-block d-md-none position-absolute">
                    <i className="caret-top d-block position-relative"></i>
                </div>
                <div className="container mt-2 pt-3 pt-md-1 pt-lg-3 pb-0 pb-md-4 px-lg-0 px-3 px-md-0">
                    <div className="row">
                        <div className="col-12 text-center text-lg-left">
                        <img className="mb-4 sophia-footer__logo" src="https://www.sophia.org/content/dam/sophia/logos/sophia-logo_2c-white.svg" alt="Sophia logo" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <ul className="sophia-footer__links col-12 col-lg-9 d-flex flex-wrap flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start  mb-md-5 mb-lg-7">
                        <li className="d-flex mr-0 mr-md-3 mb-3 mb-md-0 justify-content-center">
                            <a className="footer-link font-sofia-bold " href="/" target="_self" data-km-type="image-link" data-km-value="about">
                            <span>About</span>
                            </a>
                        </li>
                        <li className="d-flex mr-0 mr-md-3 mb-3 mb-md-0 justify-content-center">
                            <a className="footer-link font-sofia-bold " href="/" target="_self" data-km-type="image-link" data-km-value="contact-us">
                            <span>Contact us</span>
                            </a>
                        </li>
                        <li className="d-flex mr-0 mr-md-3 mb-3 mb-md-0 justify-content-center">
                            <a className="footer-link font-sofia-bold " href="/" data-km-type="image-link" data-km-value="blog">
                            <span>Blog</span>
                            </a>
                        </li>
                        <li className="d-flex mr-0 mr-md-3 mb-3 mb-md-0 justify-content-center">
                            <a className="footer-link font-sofia-bold " href="/" target="_self" data-km-type="image-link" data-km-value="privacy-policy">
                            <span>Privacy policy</span>
                            </a>
                        </li>
                        <li className="d-flex mr-0 mr-md-3 mb-3 mb-md-0 justify-content-center">
                            <a className="footer-link font-sofia-bold " href="/" target="_self" data-km-type="image-link" data-km-value="terms-of-use">
                            <span>Terms of use</span>
                            </a>
                        </li>
                        </ul>
                        <ul className="sophia-footer__social-links col-12 col-lg-3 mb-3 mb-md-7 d-flex flex-row justify-content-center justify-content-lg-end">
                        <li className="mb-2">
                            <a className="social-link mx-2 d-inline-block " href="https://www.facebook.com/sophia.org/" data-km-type="image-link" data-km-value="facebook">
                            <img className=" lazyloaded" data-src="https://www.sophia.org/content/dam/sophia/logos/facebook.svg" alt="Facebook" src="https://www.sophia.org/content/dam/sophia/logos/facebook.svg" />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="social-link mx-2 d-inline-block " href="https://twitter.com/sophia?lang=en" data-km-type="image-link" data-km-value="twitter">
                            <img className=" lazyloaded" data-src="https://www.sophia.org/content/dam/sophia/logos/twitter.svg" alt="Twitter" src="https://www.sophia.org/content/dam/sophia/logos/twitter.svg" />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="social-link mx-2 d-inline-block " href="https://www.instagram.com/sophialearning/?hl=en" data-km-type="image-link" data-km-value="instagram">
                            <img className=" lazyloaded" data-src="https://www.sophia.org/content/dam/sophia/logos/instagram.svg" alt="Instagram" src="https://www.sophia.org/content/dam/sophia/logos/instagram.svg" />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="social-link mx-2 d-inline-block " href="https://www.youtube.com/user/SophiaLearning/featured" data-km-type="image-link" data-km-value="youtube">
                            <img className=" lazyloaded" data-src="https://www.sophia.org/content/dam/sophia/logos/youtube.svg" alt="Youtube" src="https://www.sophia.org/content/dam/sophia/logos/youtube.svg" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center flex-md-row flex-column w-100 px-md-0 mr-md-0">
                        <div className="sophia-footer-copyright-text text-center text-lg-left px-2 px-md-0  ">
                        ©2023 disclaimer text comes here. 
                        </div>
                    </div>
                </div>
            </div>
            </div>
     );
}
 
export default Footer;