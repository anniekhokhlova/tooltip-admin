import gql from "graphql-tag";

export const createItemMutation = gql`
    mutation createItem($input: ItemInput) {
        createItem(input: $input) {
            id
        }
    }
`;
