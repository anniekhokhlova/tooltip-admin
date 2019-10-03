import gql from "graphql-tag";

export const updateItemMutation = gql`
    mutation updateItem($id: ID!, $input: ItemInput) {
        updateItem(id: $id, input: $input) {
            id
        }
    }
`;
