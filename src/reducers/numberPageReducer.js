import * as type from './../constant';
const INIT_STALTE=1
function getNumber (state=INIT_STALTE, action){
      
      switch (action.type) {
            case type.GET_NUMBER_PAGE:

                  return action.payload

      
            default:
                  return state
      }
} export default getNumber;