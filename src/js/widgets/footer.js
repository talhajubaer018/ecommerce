import React from 'react';

const Footeritem = (props) => {
    return (
        <div className={"footer-column col-sm-" + props.column + " col-md-" + props.column + " col-lg-" + props.column + " inline" + " center"}>
            
            <div>{props.footertext}</div>
        </div>
    );
}

const Footer = (props) => {
    const listItems = props.items.map((item) =>
        <Footeritem {...item} />
    );
    return (
        <div className="footer ">
            <div className="row">
                {listItems}

            </div>
        </div>

    );
}

export default Footer;