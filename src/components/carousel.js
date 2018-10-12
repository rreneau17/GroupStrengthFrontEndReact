// implements a carousel from react-bootstrap

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/strength_training_pic.jpg';
import slide2 from '../images/handshake.jpg';
import slide3 from '../images/fitness_smiling_group.jpg';


class CarouselGS extends Component {

    render() {
        // for some reason unable to map prop values to Carousel images, will research further and refactor
        if (this.props.landing) {
            return (
                <Carousel
                    interval={5000}
                    controls={false}>
                    <Carousel.Item>
                        <img src={slide1} />
                        <Carousel.Caption>
                            <h1>EASY TRACKING FOR STRENGTH<br />TRAINING, HIIT, AND POST REHAB</h1>
                            <p>Use the power of a custom app developed on the Fitbit <br />platform to track and analyze your training sessions.</p>
                            <a id="learn-more" href="#"><br />
                            <i className="fa fa-arrow-circle-down" style={{fontSize: '3.5em', paddingBottom: '3px'}}></i><br />See More
                            </a>
                            <br /><br />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide2} />
                        <Carousel.Caption>
                            <h1>EASY TRACKING FOR STRENGTH<br />TRAINING, HIIT, AND POST REHAB</h1>
                            <p>Use the power of a custom app developed on the Fitbit <br />platform to track and analyze your training sessions.</p>
                            <a id="learn-more" href="#"><br />
                            <i className="fa fa-arrow-circle-down" style={{fontSize: '3.5em', paddingBottom: '3px'}}></i><br />See More
                            </a>
                            <br /><br />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide3} />
                        <Carousel.Caption>
                            <h1>EASY TRACKING FOR STRENGTH<br />TRAINING, HIIT, AND POST REHAB</h1>
                            <p>Use the power of a custom app developed on the Fitbit <br />platform to track and analyze your training sessions.</p>
                            <a id="learn-more" href="#"><br />
                            <i className="fa fa-arrow-circle-down" style={{fontSize: '3.5em', paddingBottom: '3px'}}></i><br />See More
                            </a>
                            <br /><br />
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        } else {
            return "loading slides...."
        }
    }
}

function mapStateToProps(state) {
    return { landing: state.landing.data }
}

export default connect(mapStateToProps)(CarouselGS);