import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import './Footer.css'

const Footer: FC = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis qui modi
                            delectus excepturi corrupti amet assumenda esse veritatis voluptas? Repudiandae
                            ut minus numquam deleniti dolore ducimus obcaecati architecto iste distinctio aut
                            rerum et totam quis explicabo ipsam, est dignissimos. Tempore magnam tenetur dolor
                            praesentium dolore, esse ipsam aliquid magni? Rerum iusto architecto sequi itaque.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="https://www.cprogramming.com/">C</a></li>
                            <li><a href="https://dribbble.com/tags/web_ui">UI Design</a></li>
                            <li><a href="https://spring.io/projects/spring-boot">Spring Boot</a></li>
                            <li><a href="https://www.java.com/en/">Java</a></li>
                            <li><a href="https://reactjs.org/">React</a></li>
                            <li><a href="https://angular.io/">Angular</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="https://reactjs.org/">About Us</a></li>
                            <li><a href="https://reactjs.org/">Contact Us</a></li>
                            <li><a href="https://reactjs.org/">Contribute</a></li>
                            <li><a href="https://reactjs.org/">Privacy Policy</a></li>
                            <li><a href="https://reactjs.org/">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by&nbsp;
                            <a href="https://amazon.in/">Shoppi-DO</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a className="facebook" href="https://www.facebook.com/chhote.raj.3"
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="https://twitter.com/YashRaj66905525"
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a className="instagram" href="https://www.instagram.com/rajyash____/"
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a className="github" href="https://github.com/Ryash13/"
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;