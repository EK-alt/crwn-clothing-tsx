import { type } from "os";
import React from "react";
import ICollectionItemProps from "./collection-item.interface";
import "./collection-item.styles.scss";

const CollectionItem = (props: ICollectionItemProps) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{ backgroundImage: `url(${props.imageurl})` }} />

        <div className='collection-footer'>
            <span className='name'>
                {props.name}
            </span>
            <span className='price'>
                {props.price}
            </span>
        </div>

    </div >
);

export default CollectionItem;