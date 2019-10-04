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
    const [isSettingsViewOpened, setSettingsView] = useState(false);

    const { data, loading, error } = useQuery(getItemQuery, {
        variables: { id }
    });

    if (loading || error) {
        return <Spinner/>
    }

    const currentItem = data.item;

    const onUpdateClick = () => setSettingsView(true);
    const closeModifyView = () => {
        onCloseClick()
    }

    if (isSettingsViewOpened) {
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
                <Tooltip detailsView {...currentItem.tooltip}>
                    <Image src={currentItem.imageUrl} />
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
