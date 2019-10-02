import React, {useState} from 'react';
import {UploadImage} from "./UploadImage";
import {TooltipForm} from './AddTooltipForm';
import styled from 'styled-components';
import {Image} from "./Image";
import {Tooltip} from "./Tooltip";


export const AddImageView = () => {
    const initialTooltipState = {
        position: '',
        text: '',
        textColor: '#000000',
        color: '#2AF7D8',
        error: ''
    };

   const [tooltipState, setState] = useState(initialTooltipState);
   const [imagePreviewUrl, uploadImagePreview] = useState(null);

   console.log('image', imagePreviewUrl);
   return (
       <>
           <UploadImage currentState={imagePreviewUrl} onChange={uploadImagePreview}/>
           <TooltipForm onChange={setState} currentState={tooltipState}/>
           {imagePreviewUrl ? <Image src={imagePreviewUrl} Tooltip={<Tooltip {...tooltipState}/>}/> : null}
            </>
   )
};
