import React from 'react';

const Navbaritem = (props) => {
    if (props.type == 'dropdown') {
        const dropdownitems = props.items.map((item) =>
            <a class="dropdown-item" href="#">{item.text}</a>
        );
        return (
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.text}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {dropdownitems}
                </div>
            </li>
        );
    }
    return (
        <li class="nav-item active">
            <a class="nav-link" href="#">
                {props.text}
            </a>
        </li>
    );
}



const Navbar = (props) => {
    const navitems = props.items.map((item) =>
        <Navbaritem {...item} />
    );
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding_top_ten padding_bottom_ten">
            <a class="navbar-brand" href="#">{props.title}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    {navitems}
                </ul>
            </div>
            {props.xyz}
        </nav>

    );
}

export default Navbar;