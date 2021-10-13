import { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "../Rating/Rating.component";

export const processCard = (props) => {
    let title;
    let content;
    let image;

    if (props.name) {
        title = (
            <Link to={`/products/${props._id}`}>
                <Card.Title as="div">
                    <strong>{props.name}</strong>
                </Card.Title>
            </Link>
        );
    } else {
        title = undefined;
    }

    if (props.rating && props.numReviews && props.price) {
        content = (
            <Fragment>
                <Card.Text as="div">
                    <Rating
                        value={props.rating}
                        text={`${props.numReviews} reviews`}
                    />
                </Card.Text>
                <Card.Text as="h3">${props.price}</Card.Text>
            </Fragment>
        );
    } else {
        content = undefined;
    }

    if (props.image) {
        image = (
            <Link to={`/products/${props._id}`}>
                <Card.Img src={props.image} variant="top" />
            </Link>
        );
    } else {
        image = undefined;
    }

    return { title, content, image };
};
