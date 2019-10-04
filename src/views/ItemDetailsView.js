import React, { useState } from 'react';
import { Image } from "../components/Image";
import { Button } from "../components/Button";
import { Spinner } from '../components/Spinner';
import { Backdrop } from "../components/Backdrop";
import { CloseButton } from "../components/CloseButton";
import { Tooltip } from "../components/Tooltip";
import { ItemSettingsView } from "./ItemSettingsView";
import { useQuery } from "@apollo/react-hooks";
import { getItemQuery } from "../graphql/getItem";
import { StyledItemDetails, ButtonsContainer } from "./Styled";


export const ItemDetailsView = ({ id, onCloseClick, onRemoveClick }) => {
    const [isModifying, setModifying] = useState(false);

    const { data, loading, error } = useQuery(getItemQuery, {
        variables: { id }
    });

    if (loading || error) {
        return <Spinner/>
    }

    const currentItem = data.item;

    const onUpdateClick = () => setModifying(true);
    const closeModifyView = () => {
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
                <Button update onClick={onUpdateClick}>Update</Button>
                <Button remove onClick={onRemoveClick(currentItem.id)}>Remove</Button>
            </ButtonsContainer>
                <CloseButton onClick={onCloseClick}/>
            </StyledItemDetails>
        </>
    );
};
