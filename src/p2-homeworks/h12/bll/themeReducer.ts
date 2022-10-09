type changeDarkTheme = ReturnType<typeof changeDarkThemeAC>
type changeRedTheme = ReturnType<typeof changeRedThemeAC>
type changeSomeTheme = ReturnType<typeof changeSomeThemeAC>

type changeDarkThemeAC = {
    type: 'DARK-THEME',
    dark: string
}
type changeRedThemeAC = {
    type: 'RED-THEME',
    red: string
}
type changeSomeThemeAC = {
    type: 'SOME-THEME',
    some: string
}

const initState = {
    dark: '',
    red: '',
    some: ''
};

type initStateType = {
    dark: string,
    red: string,
    some: string
}

type otherTypes = changeDarkTheme | changeRedTheme | changeSomeTheme

export const themeReducer = (state: initStateType = initState, action: otherTypes): initStateType => {
    switch (action.type) {
        case "DARK-THEME":
            return {
                ...state,
                dark: action.dark
            }
        case "RED-THEME":
            return {
                ...state,
                red: action.red
            }
        case 'SOME-THEME':
            return {
                ...state,
                some: action.some
            }
        default:
            return state;
    }
};

export const changeDarkThemeAC = (dark: string): changeDarkThemeAC => {
    return {
        type: 'DARK-THEME',
        dark
    } as const
};

export const changeRedThemeAC = (red: string): changeRedThemeAC => {
    return {
        type: 'RED-THEME',
        red
    } as const
};

export const changeSomeThemeAC = (some: string): changeSomeThemeAC => {
    return {
        type: 'SOME-THEME',
        some
    } as const
};