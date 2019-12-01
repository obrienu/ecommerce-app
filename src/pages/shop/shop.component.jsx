import React, { Component } from 'react';
import ShopData from './shop-data'
import Collection from '../../components/collection.preview/collection.preview.component';
import './shop.style.scss'

export class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const collections = this.state.collections

        return (
            <div className="ShopCollection">
                {collections.map(({id, ...OtherCollection}) => (
                <Collection
                    key={id}
                    {...OtherCollection}
                />
            ))}
            </div>
           
        );
    }
}

export default Shop;
