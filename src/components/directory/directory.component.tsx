import { type } from "os";
import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import ISection from "./section.interface";

// type Section = {
//     id: string,
//     title: string,
//     imageUrl: string,
//     size: string,
//     linkUrl: string,
// }

class Directory extends React.Component {
    constructor() {
        super({}, {});

        // this.history = history;
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'http://localhost:3002/images/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'http://localhost:3002/images/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'http://localhost:3002/images/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'http://localhost:3002/images/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'http://localhost:3002/images/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    // private _history: any;
    // public get history() {
    //     return this._history;
    // }
    // public set history(_v) {
    //     this._history = _v;
    // }


    /**
     * render
     */
    public render() {
        (((Object(this.state)).sections)).map(({ id, title,
            imageUrl,
            size,
            linkUrl, }) => (
            // { title, imageUrl, size, linkUrl, } = ...otherSecti
            console.log(id, title,
                imageUrl,
                size,
                linkUrl)
        ));
        return (
            <div className='directory-menu'>
                {(((Object(this.state)).sections)).map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;