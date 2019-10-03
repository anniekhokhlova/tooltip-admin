import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {Button} from "./Button";
import {Backdrop} from "./Backdrop";
import {CloseBtn} from "./CloseBtn";
import {Tooltip} from "./Tooltip";
import {ItemSettingsView} from "./ItemSettingsView";
import {Modal} from "./Modal";

const ButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 40px;
`;

export const StyledItemDetails = styled(Modal)`
    width: 650px;
    flex-flow: column nowrap;
`;

export const ItemDetailsView = ({data, index, onCloseClick, onRemoveClick, setData, setDetailedView}) => {
    const [currentImage, setCurrentImage] = useState(data[index]);
    const [isModifying, setModifying] = useState(false);

    const onUpdateClick = () => setModifying(true);
    const closeModifyView = () => setModifying(false);
    const updateItemHandler = (item) => () => {
        const newData = [...data.slice(0, +currentImage.id), item, ...data.slice(+currentImage.id+1)];
        setData(newData);
        setModifying(false);
        setCurrentImage(item);
        setDetailedView(false);
    };

    if (isModifying) {
        return (
            <ItemSettingsView item={data[index]} onCloseClick={closeModifyView} changeItemHandler={updateItemHandler} />
        )
    }

    return (
        <>
                <Backdrop onClick={onCloseClick}/>
                <StyledItemDetails>
                    <Tooltip {...currentImage.tooltip}><Image src={currentImage.imageUrl} detailsView /></Tooltip>
                <ButtonsContainer>
                    <Button add onClick={onUpdateClick}>Update</Button>
                    <Button remove onClick={onRemoveClick(currentImage.id)}>Remove</Button>
                </ButtonsContainer>
                    <CloseBtn onClick={onCloseClick}/>
                </StyledItemDetails>
        </>
    );
};
