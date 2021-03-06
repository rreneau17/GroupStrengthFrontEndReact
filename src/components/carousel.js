// implements a carousel from react-bootstrap

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

class CarouselGS extends Component {

    renderSlide(pic) {
        return (
            <Carousel.Item key={pic}>
                <img src={require(`../images/${pic}`)} />
                <Carousel.Caption>
                    <h1>EASY TRACKING FOR STRENGTH<br />TRAINING, HIIT, AND POST REHAB</h1>
                    <p>Use the power of a custom app developed on the Fitbit <br />platform to track and analyze your training sessions.</p>
                    <a id="learn-more" href="#"><br />
                    <i className="fa fa-arrow-circle-down" style={{fontSize: '3.5em', paddingBottom: '3px'}}></i><br />See More
                    </a>
                    <br /><br />
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
    
    render() {
        if (this.props.landing) {
            return (
                <Carousel
                    interval={6000}
                    controls={false}>
                    {this.props.landing.slides.map(this.renderSlide)}
                </Carousel>
            )
        } else {
            return "loading slides...."
        }
    }
}

function mapStateToProps(state) {
    return (state.landing.data) ? { landing: state.landing.data } : { landing: ''};
}

export default connect(mapStateToProps)(CarouselGS);