import {UserType} from "../HW8";

type otherTypes = sortUsersUpAC | sortUsersDownAC | sortUsersOlderAC

type sortUsersUpAC = ReturnType<typeof sortUpUsersAC>
type sortUsersDownAC = ReturnType<typeof sortDownUsersAC>
type sortUsersOlderAC = ReturnType<typeof sortOlderUsersAC>


export const homeWorkReducer = (state: UserType[], action: otherTypes): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            if (action.payload === 'up') {
                copyState.sort((a, b) => a.age - b.age)
            }
            if (action.payload === 'down') {
                copyState.sort((a, b) => b.age - a.age)
            }
            return copyState
            if (action.payload === '18') {
                state.filter( age => age.age < 18)
            }
            // if (filter === 'middle') {
            //     filterAffairs = affairs.filter(el => el.priority === 'middle')
            // }
            // return filterAffairs ? filterAffairs : []
        }
        default: return state
    }
}

export const sortUpUsersAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

export const sortDownUsersAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

export const sortOlderUsersAC = (age: number) => {
    return {
        type: 'sort',
        payload: '18'
    } as const
}