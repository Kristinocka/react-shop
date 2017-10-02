/**
 * Created by user on 2017-09-26.
 */
import React, {Component, PropTypes} from 'react';
import './Product.css';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
    render(){
        const { name, price, photo, url, isInCart, id } = this.props;
        return(
            <div>
                <div className="product-item thumbnail" data-id={id}>
                    <img src={photo} alt="product"/>
                </div>
                <div className="product-item info">
                    <p className="product-item info info-title">{name}</p>
                    <div className="product-item info-buy">
                        <p className="product-item info-buy price">{price}</p>
                        <a className="product-item info-buy btn btn-addToCard"  onClick={this.handleClick}>

                            {isInCart ? <img src="/images/remove.png"/> : <img src="/images/add.png"/>}

                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;