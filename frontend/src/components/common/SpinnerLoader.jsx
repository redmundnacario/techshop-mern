import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLoader = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{
                width: "10vh",
                height: "10vh",
                margin: "auto",
                display: "block",
            }}
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinnerLoader;
