import React from 'react';

import ColumnDiv from '../styles/ColumnDiv';

function Column(props) {
    const { children } = props;

    return (
        <ColumnDiv baseColor="#eff5f5">
            {children}
        </ColumnDiv>
    )
}

export default Column;