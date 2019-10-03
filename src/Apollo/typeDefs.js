export const typeDefs = `
    type Item {
        id: ID!
        imageUrl: String
        tooltip: Tooltip
    }

    type Tooltip {
        id: ID!
        text: String
        position: Position
        color: String
        textColor: String
    }

    enum Position {
        TOP
        BOTTOM
        LEFT
        RIGHT
    }

    type Query {
        items: [Item]
        item(id: ID!): Item
    }

    type Mutation {
        createItem(input: ItemInput): Item
        updateItem(id: ID!, input: ItemInput): Item
        deleteItem(id: ID!): [Item]
    }

    input ItemInput {
        imageUrl: String
        tooltip: TooltipInput
    }

    input TooltipInput {
        text: String
        position: Position
        color: String
        textColor: String
    }
`;
