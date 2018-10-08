import React from 'react';
import versa_gs from '../images/versa_gs.jpg';

function deviceAppInfo() {
    return (
        <section id="device-app-info">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2>No more notepads!  Enter training logs conveniently from your Fitbit Versa or Ionic.</h2>
                        <br />
                        <p className="lead">The Group Strength device app is custom developed on the Fitbit platform.  It allows you to easily log your results, submit to the cloud, and report on progress.  &nbsp; To learn more, please watch the following walk-thru of this demo version.</p>
                        <br />
                        <div className="device-anchor">
                            <a href="https://youtu.be/L0UGntUkFcQ" target="_blank" className="btn btn-primary btn-md device-anchor">Watch a Demo</a>
                        </div>
                    </div>
                    <div className="col-md-5 align-self-end">
                        <img className="img-fluid mx-auto img-border-b" src={versa_gs} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default deviceAppInfo;