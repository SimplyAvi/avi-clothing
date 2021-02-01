import React from 'react'
import {connect} from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser} from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart} from '../../redux/user/user.actions'

import { HeaderContainer, LogoContainer, OptionContainer,  OptionLink } from './header.styles'

const Header = ({currentUser, hidden, signOutStart }) => (
    <HeaderContainer className='header'>
    
        <LogoContainer  to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionContainer className='options'>
            <OptionLink  to='/shop'> SHOP  </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div'  onClick={signOutStart}>SIGN OUT</OptionLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);