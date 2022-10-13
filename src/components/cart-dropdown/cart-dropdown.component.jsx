import './cart-dropdown.styles.scss';
import { Button } from '../button/button.component';

import React from 'react'

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items" />
      <Button>Go To Checkout</Button>
    </div>
  )
}
