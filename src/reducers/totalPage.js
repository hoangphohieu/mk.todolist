import * as type from './../constant';
const INIT_STALTE = {
      totalPage: 69,
      activePage: 1
};
function totalPage(state = INIT_STALTE, action) {

      switch (action.type) {
            case type.GET_ALL_ITEM_SUCSESS:
                  console.log(action.payload);
                  
                  return {
                        ...state,
                        totalPage: Math.ceil(action.payload.length / 5)
                  };
            case type.CHANGE_ACTIVE_PAGE:
                  return {
                        ...state,
                        activePage: action.payload
                  };
            case type.GET_ACTIVE_PAGE_TO_DEFAULT:
                  return { ...state, activePage: 1 };

            default:
                  return state;
      }
} export default totalPage;