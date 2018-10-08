import React from 'react';
import deadlift from '../images/deadlift.jpg'

function featuredWorkouts() {
    return (
        <section id="featured-workouts">
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col">
                    <h2>Check out these featured workouts on <span className="focal-item">Group Strength</span></h2>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        
                        <div class="col-sm-4">
                            <div className="thumbnail ">
                                <img className="rtn-image-home" src={deadlift} alt="..." />
                                <div className="caption">
                                    <h3>Thumbnail label</h3>
                                    <p>...</p>
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="thumbnail">
                                <img src="..." alt="..." />
                                <div className="caption">
                                    <h3>Thumbnail label</h3>
                                    <p>...</p>
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="thumbnail">
                                <img src="..." alt="..." />
                                <div className="caption">
                                    <h3>Thumbnail label</h3>
                                    <p>...</p>
                                    <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div className="col-xl-2"></div>
            </div>  
            </div>     
        </section>
    );
}

export default featuredWorkouts;