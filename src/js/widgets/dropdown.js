import React from 'react';

const Dropdown = (props) => {
    const dropdownitems = props.items.map((item) =>
        <a className={"dropdown-item " + (item.border_bottom == 'yes' ? " dropdown-item-border " : "") + (item.font_bold == 'yes' ? " dropdown-item-bold " : "") + (item.text_inverse == 'yes' ? " dropdown-item-inverse " : "")} href="#">{item.text}</a>
    );
    return (
        < div class="dropdown " >
            <button class="btn btn-secondary dropdown-toggle dropdown-button sort_dropdown_button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.dropdowntext}
                {/*<i class="fas fa-chevron-down"></i>*/}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropdownitems}
            </div>
        </div >
    );
}

export default Dropdown;



