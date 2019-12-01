import React, {Component} from 'react';
import CollectionItem from '../collection.item/collection.item.component'
import './collection.preview.style.scss'

class Preview extends Component{

    render() {
        const {title, items} = this.props 
        return (
            <div className="CollectionPreview">
                <h1>{title}</h1>
                <div className="Preview">
                {items.filter((item, index)=> index < 4).map(({id, ...item})=> (
                    <CollectionItem key={id} {...item} />
                ))}
                </div>
            </div>
        );
    }
}
export default Preview;
