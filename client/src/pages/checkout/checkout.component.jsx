import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutITem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import './checkout.style.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='heaser-block'>
                <span> Product</span>
            </div>
            <div className='heaser-block'>
                <span>Description</span>
            </div>
            <div className='heaser-block'>
                <span>Quantity</span>
            </div>
            <div className='heaser-block'>
                <span>Price</span>
            </div>
            <div className='heaser-block'>
                <span>Remove</span>
            </div>
        </div>
        <div>
            {cartItems.map(cartItem => (
                <CheckoutITem key={cartItem.id}cartItem={cartItem}/>
            ))}
        </div>
        <div className='total'><span> ${total} </span> </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
             <br />
            4242 4242 4242 4242 - Exp:01/22 - CVV: 123
             
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)