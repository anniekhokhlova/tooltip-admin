import React, {useState} from 'react';
import styled from 'styled-components';
import {useMutation} from "@apollo/react-hooks";
import {UploadImage} from "./UploadImage";
import {TooltipForm} from './TooltipForm';
import {Button} from './Button';
import {CloseBtn} from "./CloseBtn";
import {Backdrop} from "./Backdrop";
import {Modal} from "./Modal";
import {updateItemMutation} from "../graphql/updateItem";
import {createItemMutation} from "../graphql/createItem";
import {getItemsQuery} from "../graphql/getItems";
import {getItemQuery} from "../graphql/getItem";

const StyledAddView = styled(Modal)`
    width: 60%;
    flex-flow: row nowrap;
    
    & > ${Button} {
        position: absolute;
        bottom: 3%;
        right: 3%;
    }
`;

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

    const mutation = isNew ? createItemMutation : updateItemMutation;
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
        onCloseClick();
        const input = {
            imageUrl: imagePreviewUrl,
            tooltip: tooltipState
        };

        const variables = isNew ? { input } : { id, input };
        createOrUpdateItem({ variables })
    };

   return (
       <>
           <Backdrop onClick={onCloseClick}/>
           <StyledAddView>
               <UploadImage imageUrl={imagePreviewUrl} tooltipState={tooltipState} setImagePreviewUrl={setImagePreviewUrl}/>
               <TooltipForm onChange={setTooltipState} tooltipState={tooltipState}/>
               <Button add onClick={onSubmitClick} disabled={isDisabled()}>Submit</Button>
               <CloseBtn onClick={onCloseClick} />
           </StyledAddView>
       </>
   )
};
