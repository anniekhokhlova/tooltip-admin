import React from 'react';
import {Image} from './Image';

export const GridImage = props => {
    const {onClick, Tooltip, ...imageProps} = props;
    return (
        <div onClick={onClick} >
            <Image {...imageProps} Tooltip={Tooltip}/>
        </div>
    )
};
