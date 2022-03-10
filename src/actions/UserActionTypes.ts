export const USER_LOADING = "USER_LOADING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";

 
export type UserInfo = {
    
        firstName: string
        lastName: string
        id: string
        company: string
        state: string
        phone: number
    
}

export interface UserLoading {
    type: typeof USER_LOADING 
}

export interface UserSuccess {
    type: typeof USER_SUCCESS
    payload: UserInfo[]
}

export interface UserFail {
    type: typeof USER_FAIL
}

export type UserDispatchTypes = UserLoading | UserSuccess | UserFail