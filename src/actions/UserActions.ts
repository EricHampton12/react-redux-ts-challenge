import { Dispatch } from "redux";
import { UserDispatchTypes, UserFail, UserSuccess, UserLoading, USER_FAIL, USER_SUCCESS } from "./UserActionTypes";
import axios from 'axios';


export const GetUser = (user: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {

    try {
        dispatch({
            type: 'USER_LOADING'
        })

        const res = await axios.get(`https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers/${user}`)

        dispatch({
            type: USER_SUCCESS,
            payload: res.data
        })
    }

    catch(e) {
        dispatch({
            type: USER_FAIL
        })
    }

}