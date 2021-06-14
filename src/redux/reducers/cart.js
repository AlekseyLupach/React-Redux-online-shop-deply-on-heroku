const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_CART": {
      const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        },
      };

      const itemsCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        itemsCount,
        totalPrice,
      };
    }

    case "DELETE_PRODUCT_CART": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentitemsCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentitemsCount,
      };
    }

    case "PLUS_CART_PRODUCT": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemsCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        itemsCount,
        totalPrice,
      };
    }

    case "MINUS_CART_PRODUCT": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemsCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        itemsCount,
        totalPrice,
      };
    }
    case "CLEAR_CART":
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};

export default cart;

// switch (action.type) {
//   case "ADD_PRODUCT_CART": {
//     const item = {
//       ...action.payload,
//       count: 1,
//     };

//     return {
//       items: [...state.items, item],

//       itemsCount: state.itemsCount + item.count,
//       totalPrice: state.totalPrice + item.price,
//     };
//   }

//   case "CLEAR_CART": {
//     return {
//       ...state,
//       items: [],
//       totalPrice: 0,
//       itemsCount: 0,
//     };
//   }

//   case "DELETE_PRODUCT_CART": {
//     const item = {
//       ...action.payload,
//       count: 1,
//     };

//     return {
//       ...state,

//       items: state.items.filter((item) => item.id !== action.payload.id),
//       itemsCount: state.itemsCount - item.count,
//       totalPrice: state.totalPrice - action.payload.price,
//     };
//   }

//   case "PLUS_CART_PRODUCT": {
//     const item = {
//       ...action.payload,
//       count: 1,
//     };
//     return {
//       ...state,
//       items: state.items.findIndex((item) =>
//         item.id === action.payload.id
//           ? (action.payload.count + 1, [...action.payload])
//           : ""
//       ),
//       itemsCount: state.itemsCount + item.count,
//     };
//   }
