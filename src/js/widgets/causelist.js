import React from 'react';

const Causelistitem = (props) => {
    if (props.type == 'causelistheaderitem') {
        <div className="causelistheaderitem-style"></div>
    }
    else if (props.type == 'evenitem') {
        <div className="evenitem-style"></div>
    }
    else if (props.type == 'unevenitem') {
        <div className="unevenitem-style"></div>
    }

    var parts = props.case_parties.split(' vs ');
    var party1 = parts[0];
    var party2 = parts[1];
    
    return (
        <div className={"causelistitem-wrapper displaytable" + (props.evenitem == "yes" ? " evenitem-style " : "") + (props.evenitem == "no" ? " unevenitem-style " : "") + (props.headeritem == "yes" ? " causelistheaderitem-style " : "")}>
            <div className="causelistcolumnsmall tablecell verticalmiddle">{props.case_sl}</div>
            <div className="causelistcolumnlarge tablecell verticalmiddle">{props.case_number}</div>
            <div className="causelistcolumnlarge tablecell verticalmiddle ">
                <div className="block">{party1}</div>
                <div className="block">{(party2 ? 'VS' : '')}</div>
                <div className="block">{party2}</div>
            </div>
            <div className="causelistcolumnsmall tablecell verticalmiddle">{props.court_name}</div>
            <div className="causelistcolumnsmall tablecell verticalmiddle">{props.case_heading}</div>
            <div className="causelistcolumnsmall tablecell verticalmiddle">FOR</div>

        </div>

    );
}

class Causelist extends React.Component {
    render() {
        const listItems = this.props.items.map((item, index, array) =>
            <Causelistitem {...item} headeritem={index == 0 ? "yes" : "no"} evenitem={index % 2 == 0 ? "yes" : "no"} />
        );
        return (
            <div className="">
                {listItems}
            </div>
        );
    }
}

export default Causelist;