import React from "react";
import './menu-item.styles.scss';
import { RouteComponentProps, withRouter } from "react-router-dom";
import ISection from "../directory/section.interface";
import { StaticContext } from "react-router";

type History = {}[];
type Match = {
    url: string
}

type MenuItemProps = {
    title: string, imageUrl: string, key: string, size: string, history: History, linkUrl: string, match: Match
}
// { title, imageUrl, key, size, history, linkUrl, match }
const MenuItem: React.ComponentType<any> = ({ title, imageUrl, key, size, history, linkUrl, match }: MenuItemProps) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{String(title).toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem);