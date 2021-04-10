import React, { Component } from 'react'
import CartItem from './CartItem'


class Cart extends Component {
    render() {
        const { 
          cartitems, 
          calculatePrice, 
          calculatePriceTotal, 
          handleDecrement, 
          handleIncrement, 
          handleDelete,
          onReset
        } = this.props
        return (
            <React.Fragment>
              <table>  
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Price</th>
                  </tr>
                </thead>  

                <tbody>          
                    {cartitems.map(
                        (cartitem, index) => 
                          <CartItem 
                            key={index} 
                            index = {index+1}
                            cartitem={cartitem} 
                            calculatePrice={calculatePrice}
                            onDecrement={handleDecrement}
                            onIncrement={handleIncrement}
                            onDelete={handleDelete}
                            onReset={onReset}
                          />
                    )}          
                </tbody>

                <tfoot>
                  <tr>
                    <td>
                      Grand Total:
                    </td>
                    <td>
                      {calculatePriceTotal()}
                    </td>
                  </tr>
                </tfoot>

              </table>

              <button onClick={onReset}>Reset</button>
            </React.Fragment>
        )
    }
}

export default Cart