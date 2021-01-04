import React from 'react'
import {connect} from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden } from '../../redux/cart/cart.selectors'

import { HeaderContainer, LogoContainer, OptionContainer,  OptionLink } from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer className='header'>
    
        <LogoContainer  to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionContainer className='options'>
            <OptionLink  to='/shop'> SHOP  </OptionLink>
            <OptionLink to='/contact'> CONTACT  </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div'  onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'> SIGN IN </OptionLink>
            }
            < CartIcon / >
        </OptionContainer>
        {hidden ? null : < CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);