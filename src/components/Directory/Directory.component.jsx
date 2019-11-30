import React, { Component } from 'react';
import MenuItem from '../MenuItem/Menu-Item.component';
import shoe from "./images/shoes.jpg"
import bag from "./images/bag.jpg"
import men from "./images/men.jpg"
import women from "./images/women.jpg"
import './Directory.style.scss'

export class Directory extends Component {
    static defaultProps = {
        section : [
            {
                id: 1,
                title: "WOMEN",
                subtitle: "SHOP NOW",
                image: women,
            },
            {
                id: 3,
                title: "BAGS",
                subtitle: "SHOP NOW",
                image: bag,
            },
            {
                id: 4,
                title: "SHOES",
                subtitle: "SHOP NOW",
                image: shoe,
            },
            {
                id: 2,
                title: "MEN",
                subtitle: "SHOP NOW",
                image: men,
            }
        ]
    }
    render() {
        const menuItem = this.props.section.map(a => <MenuItem key={a.id} title={a.title} subtitle={a.subtitle} image={a.image} />)
        return (
            <div className="Directory">
                {menuItem}
            </div>
        );
    }
}

export default Directory;
