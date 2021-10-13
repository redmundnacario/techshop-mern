import React from "react";
import { Card as CardB } from "react-bootstrap";

import { processCard } from "./productCard.logic.js";

const Card = (props) => {
    const { image, title, content } = processCard(props);
    return (
        <CardB className="my-3 p-3 rounded">
            {image}
            <CardB.Body>
                {title}
                {content}
            </CardB.Body>
        </CardB>
    );
};

export default Card;
