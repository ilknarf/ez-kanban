import React from 'react';

import CardDiv from '../styles/CardDiv';

function Card(props) {
    const { title, assigned, children } = props;

    return(
        <CardDiv baseColor="white">
            <h1>
                {title}
            </h1>
            <p>
                {children}
            </p>
        </CardDiv>
    );
}

export default Card;

