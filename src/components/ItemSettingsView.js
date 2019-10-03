import React, {useState} from 'react';
import {UploadImage} from "./UploadImage";
import {TooltipForm} from './TooltipForm';
import styled from 'styled-components';
import {Button} from './Button';
import {CloseBtn} from "./CloseBtn";
import {Backdrop} from "./Backdrop";
import {Modal} from "./Modal";

const StyledAddView = styled(Modal)`
    width: 950px;
    flex-flow: row nowrap;
    
    & > ${Button} {
        position: absolute;
        bottom: 3%;
        right: 3%;
    }
`;

const defaultItem = {
    id: '',
    imageUrl: null,
    tooltip: {
        position: 'BOTTOM',
        text: '',
        textColor: '#000000',
        color: '#39D2B4'
    }
};

export const ItemSettingsView = ({item: {id, tooltip, imageUrl} = defaultItem, onCloseClick, changeItemHandler}) => {
    const [tooltipState, setTooltipState] = useState(tooltip);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);

    const timestamp = Date.now();
    const newItem = {imageUrl: imagePreviewUrl, tooltip: tooltipState, id: timestamp};

    const onSubmit = () => {
        console.log('here');
        if (tooltipState.text.length === 0) {
            console.log('not valid');
        }
    };

    const isDisabled = () => tooltipState.text.length === 0 || !imagePreviewUrl;

   return (
       <>
           <Backdrop onClick={onCloseClick}/>
           <StyledAddView>
               <UploadImage imageUrl={imagePreviewUrl} tooltipState={tooltipState} setImagePreviewUrl={setImagePreviewUrl}/>
               <TooltipForm onChange={setTooltipState} tooltipState={tooltipState}/>
               <Button add onClick={changeItemHandler(newItem)} disabled={isDisabled()}>Submit</Button>
               <CloseBtn onClick={onCloseClick} />
           </StyledAddView>
       </>
   )
};
