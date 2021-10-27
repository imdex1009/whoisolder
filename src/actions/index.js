export const SWITCH_HEADER = "SWITCH_HEADER";
export const SWITCH_RESULT = "SWITCH_RESULT";
export const SET_SCORE = "SET_SCORE";
export const INIT_SCORE = "INIT_SCORE";
export const SET_PEOPLE = "SET_PEOPLE";
export const SET_ANSWER= "SET_ANSWER";



export const switchHeader = (boolean) => {
    return {
        type: SWITCH_HEADER,
        payload: {
            header : boolean
        }
    }
}

export const switchResult = (boolean) => {
    return {
        type: SWITCH_RESULT,
        payload: {
            header : boolean
        }
    }
}

export const setScore = (score) => {
    return {
        type: SET_SCORE,
        payload: {
            score
        }
    }
}

export const initScore = () => {
    return {
        type: INIT_SCORE,
        payload: {
            score: 0
        }
    }
}


export const setPeople = (people) => {
    return {
        type: SET_PEOPLE,
        payload: {
            people
        }
    }
}

export const setAnswer = (answer) => {
    return {
        type: SET_ANSWER,
        payload: {
            answer
        }
    }
}
