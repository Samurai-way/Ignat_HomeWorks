const initState = {
    isloading: false,
}

type firstTypeActionType = {
    type: 'IS-LOADING',
    isloading: boolean,
}


export type isloading = ReturnType<typeof isloadingAC>
type initStateType = typeof initState
export type otherTypes = isloading


export const loadingReducer = (state = initState, action: otherTypes): initStateType => { // fix any
    console.log(state)
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
               isloading: action.isloading
            }
        }
        default:
            return state
    }
}

export const isloadingAC = (isloading: boolean): firstTypeActionType => {
    return {
        type: 'IS-LOADING',
        isloading: isloading
    } as const
}

