import { items, tooltips } from "./mockedData";

const deleteElement = (arr, targetIndex) => {
  arr.forEach((_, index) => {
      if (index === targetIndex) {
          arr.splice(index, 1);
      }
  })
};

export const resolvers = {
    Query: {
        items: () => {
            return items;
        },
        item: (_, { id }) => items.find(item => item.id === id)
    },
    Mutation: {
        createItem: (_, { input }) => {
            const {
                imageUrl,
                tooltip: {
                    text,
                    color,
                    position,
                    textColor
                }
            } = input;

            const id = Date.now().toString();

            const newItem = {
                id,
                imageUrl,
                tooltipId: id
            };

            items.push(newItem);

            const newTooltip = {
                id,
                text,
                color,
                position,
                textColor
            };

            tooltips.push(newTooltip);

            return newItem;
        },
        updateItem: (_, { id, input }) => {
            const updatedItem = items.find(item => item.id === id);
            const updatedTooltip = tooltips.find(({ id }) => updatedItem.id === id);

            const {
                imageUrl,
                tooltip: {
                    text,
                    color,
                    position,
                    textColor
                }
            } = input;

            updatedItem.imageUrl = imageUrl;

            updatedTooltip.text = text;
            updatedTooltip.color = color;
            updatedTooltip.position = position;
            updatedTooltip.textColor = textColor;

            return updatedItem;
        },
        deleteItem: (_, { id }) => {
            const removedItemIndex = items.findIndex(item => item.id === id);

            deleteElement(items, removedItemIndex);
            deleteElement(tooltips, removedItemIndex);

            return items;
        }
    },
    Item: {
        tooltip: item => tooltips.find(({ id }) => id === item.tooltipId)
    }
};
