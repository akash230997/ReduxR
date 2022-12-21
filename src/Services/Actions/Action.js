import dataAdd from '../Constants';

export const AddToCart = (data) => {
    return {
        type : dataAdd,
        data
    }
}