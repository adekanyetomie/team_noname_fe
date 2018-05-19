import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src="img/logo-green-2x.png" alt="full logo" className="footer__logo" />
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="#" className="footer__link">Akinde Emmanuel</a> on a online course <a href="#" className="footer__link">Advanced CSS and Sass</a> Copyright &copy; Jonas.io. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel itaque, placeat obcaecati repudiandae eum fugiat autem quae vitae eius.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
};
export default Footer