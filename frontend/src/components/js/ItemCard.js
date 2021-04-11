import React, { Component } from 'react'

export class ItemCard extends Component {
    render() {
        const {item, onAddtoCart} = this.props
        return (
            <React.Fragment>
                <h2>{item.name}</h2>
                {/* <span>{item.id}</span> */}
                <span>{item.rate}</span>
                <button onClick={() => onAddtoCart(item)} value={item.id}>Add to Cart</button>
            </React.Fragment>
        )
    }
}

export default ItemCard
