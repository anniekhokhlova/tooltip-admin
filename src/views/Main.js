import React, { useState } from 'react';
import { AddButton } from "../components/AddButton";
import { Spinner } from '../components/Spinner';
import { Grid } from "../components/Grid";
import { ItemDetailsView } from "./ItemDetailsView";
import { ItemSettingsView } from "./ItemSettingsView";
import { useQuery, useMutation } from "react-apollo";
import { getItemsQuery } from '../graphql/getItems';
import { deleteItemMutation } from "../graphql/deleteItem";
import { StyledMain } from './Styled';


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
        return <Spinner/>;
    }

    const { items } = data;

    return (
        <StyledMain>
            <Grid data={items} onImageClick={onImageClick}/>
            <AddButton update onClick={onAddButtonClick}>+</AddButton>
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
