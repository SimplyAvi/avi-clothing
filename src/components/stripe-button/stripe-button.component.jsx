import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const REACT_APP_PUBLISHABLE_KEY = 'pk_test_51HX5qGKqfrdocFRSz0gNEipL36BIYgOoAwmwbvtAA8Xv1LF7cbwjuvA3kzCuPLPBTcQb6002XxQxRsl6sLwSXsSM00OdxydLiE'
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an  issue  with  your payment. Please make sure  you use the provided credit card.'
            )
        }) 

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