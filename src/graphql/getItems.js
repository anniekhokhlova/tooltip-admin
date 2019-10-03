import gql from "graphql-tag";

export const getItemsQuery = gql`
    query {
        items {
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
