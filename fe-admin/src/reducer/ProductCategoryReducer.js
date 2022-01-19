export default function todoAppReducer (state, { type, payload }) {

    switch (type) {
      case 'init':
        return {
          categories: payload.category,
         
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
  
  export const categoryState = {
    categories: [],
    
  };