import produce from "immer";
import { map, reduce } from "lodash";

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cart = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_CART":
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;
      case "PLUS_CART_PRODUCT":
        draft.items[action.payload].push(draft.items[action.payload][0]);
        break;
      case "MINUS_CART_PRODUCT":
        if (draft.items[action.payload].length > 1) {
          draft.items[action.payload].shift();
        }
        break;
      case "DELETE_PRODUCT_CART":
        delete draft.items[action.payload];
        break;
      case "CLEAR_CART":
        draft.items = {};
        break;
      default:
    }

    const result = reduce(
      map(draft.items),
      (prev, cur) => prev.concat(cur),
      []
    );

    draft.totalPrice = result.reduce((total, obj) => obj.price + total, 0);
    draft.itemsCount = result.length;
  });
};

export default cart;
