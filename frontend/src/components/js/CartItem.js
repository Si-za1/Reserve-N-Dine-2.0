import React, { Component } from 'react'


class CartItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            

        }
    }
    
    render() {
        const { index, cartitem, calculatePrice, onDecrement, onIncrement, onDelete } = this.props
        const { item, quantity } = cartitem
        const { name, rate } = item
        //let calculatePrice = (quantity, rate) => quantity * rate
        return (
            <React.Fragment>
                <tr>
                    <td>{ index }</td>
                    <td>{ name }</td>
                    <td>
                        <button onClick={() => onDecrement(cartitem)}>-</button>
                        { quantity }
                        <button onClick={() => onIncrement(cartitem)}>+</button>    
                    </td>
                    <td>{ rate }</td>
                    <td>{ calculatePrice(cartitem) }</td> 
                    <button onClick={() => onDelete(cartitem)}>Remove</button>
                </tr>
            </React.Fragment>
        )
    }
}

export default CartItem