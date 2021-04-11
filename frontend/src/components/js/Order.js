import React, { Component } from 'react'
import ItemCard from './ItemCard'

export class Order extends Component {
    render() {
        const {items, handleAddtoCart} = this.props
        return (
            <React.Fragment>
                <h1>Order</h1>
                <div>
                    {
                        items.map(
                            (item, index) => 
                                <ItemCard
                                    key={index}
                                    item={item}
                                    onAddtoCart={handleAddtoCart}
                                />                            
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Order
