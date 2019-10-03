import gql from "graphql-tag";

export const getItemQuery = gql`
    query getItemQuery($id: ID!) {
        item(id: $id) {
            id
            imageUrl
            tooltip {
                text
                color
                position
                textColor
            }
        }
    }
`;
