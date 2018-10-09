import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-dark py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2 text-center">
                        © 2018, Group Strength Social Fitness
                    </div>
                    <div className="col-lg-1 text-center">
                        678-827-6381
                    </div>
                    <div className="col-lg-1 text-center">
                        <a href="/architecture">Architecture</a>
                    </div>
                    <div className="col-lg-1 text-center">
                        <a href="https://termsfeed.com/privacy-policy/47c264e1feb4b88c420effa3e4bfabc7" target="_blank">Privacy Policy</a>
                    </div>
                    <div className="col-lg-1 text-center">
                        <a href="/terms">Terms of Use</a>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </footer>  
    )
}

export default Footer;