import React from "react";

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="tc bg-light-blue hover-bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/my-robot-${id}?size=150x150`} />
            <div>
                <h2 className="f4">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;