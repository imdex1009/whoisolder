export const SWITCH_HEADER = "SWITCH_HEADER"

export const switchHeader = (boolean) => {
    return {
        type: SWITCH_HEADER,
        payload: {
            header : boolean
        }
    }
}