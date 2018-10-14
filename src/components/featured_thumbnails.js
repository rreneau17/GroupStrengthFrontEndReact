import React from 'react';

function FeaturedThumbnails(props) {
    
    return (
        <div className="thumbnail " onClick={() => props.onRtnSelect(props.routine)}>
            <img src={require(`../images/${props.pic}`)} alt="..." />
            <div className="caption">
                <h3>{props.routine}</h3>
                <p>{props.Type}</p>
            </div>
        </div>
    )

}

export default FeaturedThumbnails;

// 