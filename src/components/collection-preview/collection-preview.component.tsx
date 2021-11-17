import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import { type } from "os";
import ICollectionItemProps from "../collection-item/collection-item.interface";
import ICollectionPreviewProps from "./collection-preview.interface";

const CollectionPreview = (props: ICollectionPreviewProps) => (
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => (
                <CollectionItem id={id} {...itemProps} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;