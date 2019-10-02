import React, {useState} from 'react';
import {UploadImage} from "./UploadImage";
import {TooltipForm} from './AddTooltipForm';
import styled from 'styled-components';
import {Button} from './Button';
import {CloseBtn} from "./CloseBtn";
import {Backdrop} from "./Backdrop";

const StyledAddView = styled.div`
    width: 950px;
    height: 600px;
    border: 1px solid #eee;
    box-shadow: 0 1px 1px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    background-color: white;
    position: fixed;
    top: 3%;
    z-index: 101;
    background-color: #f7fcff;
    
    & > ${Button} {
        position: absolute;
        bottom: 3%;
        right: 3%;
    }
   
`;



const defaultItem = {
    id: '',
    imageUrl: '',
    tooltip: {
        position: 'bottom',
        text: '',
        textColor: '#000000',
        color: '#2AF7D8',
        error: ''
    }
};

export const AddImageView = ({item: {tooltip, imageUrl} = defaultItem, onCloseClick}) => {

    console.log(tooltip);
   const [tooltipState, setState] = useState(tooltip);

   return (
       <>
           <Backdrop onClick={onCloseClick}/>
           <StyledAddView>
               <UploadImage imageUrl={imageUrl} tooltipState={tooltipState}/>
               <TooltipForm onChange={setState} currentState={tooltipState}/>
               <Button add>Create</Button>
               <CloseBtn onClick={onCloseClick} />
           </StyledAddView>
       </>
   )
};
