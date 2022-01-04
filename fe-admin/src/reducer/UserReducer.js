export default function UserReducer (state, { type, payload }) {

    switch (type) {
      case 'init':
        return {
          items: payload.items,
          query: payload.query
        }
  
      case 'add_item':
        return {
          ...state,
          items: [...state.items, payload]
        }
  
      case 'update_filter':
        return {
          ...state,
          query: payload
        }
  
      case 'complete_task':
        return {
          ...state,
          items: state.items.map(function (i) {
            if (i.id === payload)
              return { ...i, complete: true }
  
            return i;
          })
        }
  
      default:
        return state;
    }
  };
  
  export const userState = {
    items: [],
    query: ''
  };