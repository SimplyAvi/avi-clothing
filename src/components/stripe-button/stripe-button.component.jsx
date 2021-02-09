import React from 'react'
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const REACT_APP_PUBLISHABLE_KEY = 'pk_test_51HX5qGKqfrdocFRSz0gNEipL36BIYgOoAwmwbvtAA8Xv1LF7cbwjuvA3kzCuPLPBTcQb6002XxQxRsl6sLwSXsSM00OdxydLiE'
    
    const onToken = token => {
        
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            lable="Pay Now"
            name='Avi Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={REACT_APP_PUBLISHABLE_KEY}
            
        />
    )
}

export default StripeCheckoutButton