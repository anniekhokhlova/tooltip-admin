import React from 'react';
import {Image} from './Image';

export const GridImage = props => {
    const {onClick, ...imageProps} = props;
    return (
        <div onClick={onClick} >
            <Image {...imageProps}/>
        </div>
    )
};
