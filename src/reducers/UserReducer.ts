import { bindActionCreators } from "redux";
import { UserDispatchTypes, UserInfo, USER_LOADING, USER_SUCCESS, USER_FAIL } from "../actions/UserActionTypes";

interface DefaultStateI {
    loading: boolean,
    user?: UserInfo[]
}


const initialState: DefaultStateI = {
    loading: true,
};

const userReducer = (state: DefaultStateI = initialState, action: UserDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case USER_FAIL:
           return {
               loading: false,
           } 
           case USER_LOADING:
               return {
                   loading: false,
               }
               case USER_SUCCESS:
                   return {
                       loading: true,
                       user: action.payload
                   }

                   default: return state
    }
};

export default userReducer