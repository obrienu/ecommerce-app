import React from 'react'
import './collection.item.style.scss'

export const CollectionItem = ({name, imageUrl, price})=>{
    return(
        <div className="CollectionItem">
            <div
            className="Image"
            style = {{
                backgroundImage : `url(${imageUrl})`
            }}
            />
            <div className="footer">
                <span className="ItemName">{name}</span>
                <span className="ItemPrice">#{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem