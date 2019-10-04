import React, { useState } from 'react';
import { useMutation } from "@apollo/react-hooks";
import { UploadImage } from "../components/UploadImage";
import { TooltipForm } from '../components/TooltipForm';
import { Button } from '../components/Button';
import { CloseButton } from "../components/CloseButton";
import { Backdrop } from "../components/Backdrop";
import { updateItemMutation } from "../graphql/updateItem";
import { createItemMutation } from "../graphql/createItem";
import { getItemsQuery } from "../graphql/getItems";
import { getItemQuery } from "../graphql/getItem";
import { StyledAddView } from './Styled';

const DEFAULT_ITEM_PROPS = {
    id: '',
    imageUrl: null,
    tooltip: {
        position: 'BOTTOM',
        text: '',
        textColor: '#000000',
        color: '#39D2B4'
    }
};

export const ItemSettingsView = ({item: {id, tooltip, imageUrl} = DEFAULT_ITEM_PROPS, onCloseClick}) => {
    const [tooltipState, setTooltipState] = useState(tooltip);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);

    const isDisabled = () => tooltipState.text.length === 0 || !imagePreviewUrl;

    const isNew = !id;

    const mutation = isNew ?
        createItemMutation :
        updateItemMutation;

    const refetchQueries = isNew ?
        [{
            query: getItemsQuery
        }] : [{
            query: getItemsQuery
        }, {
            query: getItemQuery,
            variables: { id }
        }];

    const [createOrUpdateItem] = useMutation(mutation, {
        awaitRefetchQueries: true,
        refetchQueries
    });

    const onSubmitClick = () => {
        const input = {
            imageUrl: imagePreviewUrl,
            tooltip: tooltipState
        };

        const variables = isNew ?
            { input } :
            { id, input };

        createOrUpdateItem({ variables });
        onCloseClick();
    };

   return (
       <>
           <Backdrop onClick={onCloseClick}/>
           <StyledAddView>
               <UploadImage imageUrl={imagePreviewUrl} tooltipState={tooltipState} setImagePreviewUrl={setImagePreviewUrl}/>
               <TooltipForm onChange={setTooltipState} tooltipState={tooltipState}/>
               <Button update onClick={onSubmitClick} disabled={isDisabled()}>Submit</Button>
               <CloseButton onClick={onCloseClick} />
           </StyledAddView>
       </>
   )
};
