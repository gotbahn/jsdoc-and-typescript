import React from 'react';

/** @type {React.FunctionComponent<Props>} */
const Image = (props) => {
    return (
        <img
            src={props.src}
            className={props.className}
            alt={props.alt}
        />
    );
};

export default Image;

/**
 * @typedef {Object} Props
 * @prop {string} alt
 * @prop {string} [className]
 * @prop {string} src
 */
