import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {Button} from "./Button";
import {Backdrop} from "./Backdrop";
import {CloseBtn} from "./CloseBtn";
import {Tooltip} from "./Tooltip";
import {ItemSettingsView} from "./ItemSettingsView";
import {Modal} from "./Modal";
import {useQuery} from "@apollo/react-hooks";
import {getItemQuery} from "../graphql/getItem";

const ButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 40px;
`;

export const StyledItemDetails = styled(Modal)`
    width: 40%;
    flex-flow: column nowrap;
`;

export const ItemDetailsView = ({ id, onCloseClick, onRemoveClick, setData, setDetailedView }) => {
    //const [currentItem, setCurrentItem] = useState(data[index]);
    const [isModifying, setModifying] = useState(false);

    const { data, loading, error } = useQuery(getItemQuery, {
        variables: { id }
    });

    if (loading || error) {
        return null;
    }

    const currentItem = data.item;

    const onUpdateClick = () => setModifying(true);
    const closeModifyView = () => {
        //setModifying(false);
        onCloseClick()
    }

    if (isModifying) {
        return (
            <ItemSettingsView
                item={currentItem}
                onCloseClick={closeModifyView}
            />
        )
    }

    return (
        <>
            <Backdrop onClick={onCloseClick}/>
            <StyledItemDetails>
                <Tooltip {...currentItem.tooltip}>
                    <Image src={currentItem.imageUrl} detailsView />
                </Tooltip>
            <ButtonsContainer>
                <Button add onClick={onUpdateClick}>Update</Button>
                <Button remove onClick={onRemoveClick(currentItem.id)}>Remove</Button>
            </ButtonsContainer>
                <CloseBtn onClick={onCloseClick}/>
            </StyledItemDetails>
        </>
    );
};
