import React from 'react';


const Quickviewitem = (props) => {
    return (
        <div className={(props.lastitem == "yes" ? " lastitem-style " : "") + " quicklinkitem-wrapper"}>
            <div className={"inline " + props.circle}>
                <i className={props.fontawesome +  " center"}></i>
            </div>
            <div className="inline ">
                <div className="block quicklinktext">
                    {props.text1}
                </div>
                <div className="block quicklinksecondtext">
                    {props.text2}
                </div>
            </div>
        </div>

    );
}

const Quickview = (props) => {
    const listItems = props.items.map((item, index, array) =>
        <Quickviewitem {...item} lastitem={index == array.length - 1 ? "yes" : "no"} />

    );



    return (
        <div className="sidebaritem-wrapper" style={{ border: "1px solid lightgray" }}>
            <div className="sidebarheader">Quick View</div>
            <div className="secondaryheader-items">
                {listItems}
            </div>
        </div>

    );
}

export default Quickview;