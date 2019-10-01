import React from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {Button} from "./Button";
import {Backdrop} from "./Backdrop";
import {CloseBtn} from "./CloseBtn";

const ButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 40px;
`;

const StyledContainer = styled.div`
    width: 650px;
    height: 600px;
    border: 1px solid #eee;
    box-shadow: 0 1px 1px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: fixed;
    top: 5%;
    z-index: 101;
`;

export const ImageDetailsView = ({src, Tooltip, isVisible, onCloseClick} ) => {
    if (!isVisible) {
        return null;
    }
    return (
        <>
            <Backdrop onClick={onCloseClick}/>
            <StyledContainer>
                <Image src={src} detailsView Tooltip={Tooltip} />
                <ButtonsContainer>
                    <Button add>Update</Button>
                    <Button remove>Remove</Button>
                </ButtonsContainer>
                <CloseBtn onClick={onCloseClick}/>
            </StyledContainer>;
        </>
    );
}
