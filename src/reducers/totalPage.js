import * as type from './../constant';
const INIT_STATE = {
      totalPage: 0,
      activePage: 1
};
function totalPage(state = INIT_STATE, action) {

      switch (action.type) {
            case type.GET_ALL_ITEM_SUCSESS:
                  
                  
                  return {
                        ...state,
                        totalPage: 5
                  };
            case type.CHANGE_ACTIVE_PAGE:
                  return {
                        ...state,
                        activePage: 3
                  };
            case type.GET_ACTIVE_PAGE_TO_DEFAULT:
                  return { ...state, activePage: 1 };

            default:
                  return state;
      }
} export default totalPage;