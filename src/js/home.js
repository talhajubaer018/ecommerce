import React from 'react';

import { navbar_data, sidebar1_data, causelist_data, sidebar2_data, sidebar3_data, footer_data, accordion_items_data } from './data';

const Home = (props) => {

    return (
        <div>
            <div className="header">
                <div>Admin Panel</div>
            </div>
            <div>
                <div className="sidebar left">
                    <div>Option 1</div>
                    <div>Option 2</div>
                    <div>Option 3</div>
                    <div>Option 4</div>
                    <div>Option 5</div>
                    <div>Option 6</div>
                    <div>Option 7</div>
                </div>
                <div className="product_details">
                    <div className="details_header">
                        <div className="inline">Photo</div>
                        <div className="inline">ID</div>
                        <div className="inline">SKU</div>
                        <div className="inline">ASIN</div>
                        <div className="inline">Name</div>
                        <div className="inline">Description</div>
                        <div className="inline">Vendor</div>
                        <div className="inline">Brand</div>
                    </div>
                    <div className="textfields">
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                        <input className="inline"></input>
                    </div>
                    <div className="buttons_wrapper">
                        <button>Add New</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Home;