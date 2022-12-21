import { AddToCart } from '../Services/Actions/Action';

export function mapDispatchToProps(dispatch) {
    addToCartHandler: data => dispatch(AddToCart(data));
}
