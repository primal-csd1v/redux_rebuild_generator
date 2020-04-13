export const SET_TOP_TEXT = 'SET_TOP_TEXT';
export const SET_BOTTOM_TEXT = 'SET_BOTTOM_TEXT';
export const SET_RESPONSE = 'SET_RESPONSE';
export const SET_RANDOM_IMG = 'SET_RANDOM_IMG';

export function setTopText(value) 
{    
    return {
      type: SET_TOP_TEXT,
      payload: value,
    }
}

export function setBottomText(value) 
{    
    return {
        type: SET_BOTTOM_TEXT,
        payload: value,
    }
}

export function setResponse(value) 
{    
    return {
        type: SET_RESPONSE,
        payload: value,
    }
}

export function setRandomImg(value) 
{    
    return {
        type: SET_RANDOM_IMG,
        payload: value,
    }
}