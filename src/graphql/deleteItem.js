import gql from "graphql-tag";

export const deleteItemMutation = gql`
    mutation deleteItem ($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`;
