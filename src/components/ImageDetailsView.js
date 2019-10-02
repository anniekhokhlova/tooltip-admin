import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {Button} from "./Button";
import {Backdrop} from "./Backdrop";
import {CloseBtn} from "./CloseBtn";
import {Tooltip} from "./Tooltip";
import {AddImageView} from "./AddImageView";

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

export const ImageDetailsView = (props ) => {
    console.log(props);
    const { imageData, onCloseClick} = props;
    const {imageUrl, tooltip} = imageData;
    const [isModifying, setModifying] = useState(false);

    const onUpdateClick = () => setModifying(true);

    const closeModifyView = () => setModifying(false);

    return (
        <>
            {isModifying ? <AddImageView item={imageData} onCloseClick={closeModifyView} /> :
                <>
                    <Backdrop onClick={onCloseClick}/>
                    <StyledContainer>
                    <Tooltip {...tooltip}><Image src={imageUrl} detailsView /></Tooltip>
                    <ButtonsContainer>
                    <Button add onClick={onUpdateClick}>Update</Button>
                    <Button remove>Remove</Button>
                    </ButtonsContainer>
                    <CloseBtn onClick={onCloseClick}/>
                    </StyledContainer>
                </>
            }
        </>
    );
}
