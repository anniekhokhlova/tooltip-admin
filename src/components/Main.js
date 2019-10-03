import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from "./Button";
import {Grid} from "./Grid";
import {ItemDetailsView} from "./ItemDetailsView";
import {ItemSettingsView} from "./ItemSettingsView";
import { useQuery, useMutation } from "react-apollo";
import {getItemsQuery } from '../graphql/getItems';
import {deleteItemMutation} from "../graphql/deleteItem";
import {updateItem} from "../graphql/updateItem";

const StyledMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & > ${Button} {
            position: fixed;
            bottom: 20px;
            right: 40px;
        }
`;

export const Main = () => {
    const {data, loading, error} = useQuery(getItemsQuery);
    const [deleteMutation] = useMutation(deleteItemMutation, {
        awaitRefetchQueries: true,
        refetchQueries: [{
            query: getItemsQuery
        }]
    });

    const [detailedViewIsOpened, setDetailedView] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);
    const [addViewIsOpened, setAddView] = useState(false);

    const onImageClick = id => () => {
        setActiveItemId(id);
        setDetailedView(true);
    };

    const onCloseClick = () => setDetailedView(false);
    const onAddViewClose = () => setAddView(false);
    const onAddButtonClick = () => setAddView(true);

    const onRemoveClick = id => () => {
        setDetailedView(false);
        deleteMutation({variables: { id }});
    };

    if (loading || error) {
        return null;
    }

    const { items } = data;

    return (
        <StyledMain>
            <Grid data={items} onImageClick={onImageClick}/>
            <Button add onClick={onAddButtonClick}>Add</Button>
            { detailedViewIsOpened &&
                <ItemDetailsView
                    id={activeItemId}
                    onRemoveClick={onRemoveClick}
                    setDetailedView={setDetailedView}
                    onCloseClick={onCloseClick}
                />
            }
            { addViewIsOpened &&
                <ItemSettingsView onCloseClick={onAddViewClose} /> }
        </StyledMain>
    )
};
