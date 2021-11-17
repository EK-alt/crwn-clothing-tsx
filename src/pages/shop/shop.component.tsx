import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    public render() {
        const { collections } = Object(this.state);
        console.log('collections =', collections);
        return (
            <div className="shop-page">
                {
                    Object(collections).map(({ id, title, items, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} title={title} items={items} {...otherCollectionProps} />
                    ))
                }
            </div>
        )

    }
}

export default ShopPage;