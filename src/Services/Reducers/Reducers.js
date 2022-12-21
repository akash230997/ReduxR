import dataAdd from '../Constants';
//InitialState
const InitialState = {
    cardData:[]
}

export const cardItems = (state = InitialState,action) =>{
    switch (action.type) {
        case dataAdd:
            return {
                ...state,
                cardData:action.data
            }
            break;    
        default:
            return state
    }
}