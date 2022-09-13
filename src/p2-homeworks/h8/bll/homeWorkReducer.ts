import {UserType} from "../HW8";

type otherTypes = sortUsersUpAC | sortUsersDownAC | sortUsersOlderAC | allUsersAC

type sortUsersUpAC = ReturnType<typeof sortUpUsersAC>
type sortUsersDownAC = ReturnType<typeof sortDownUsersAC>
type sortUsersOlderAC = ReturnType<typeof sortOlderUsersAC>
type allUsersAC = ReturnType<typeof allUsersAC>

export const homeWorkReducer = (state: UserType[], action: otherTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // const copyState = [...state]
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => b.age - a.age)]
            }
            if (action.payload === '18') {
                return [...state.filter( age => age.age < 40)]
            }
            if(action.payload === 'Кот'){
                return [...state.filter(name => name.name === 'Кот')]
            }
            return state
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

export const sortOlderUsersAC = () => {
    return {
        type: 'sort',
        payload: '18'
    } as const
}

export const allUsersAC = () => {
    return {
        type: 'sort',
        payload: 'Кот'
    } as const
}