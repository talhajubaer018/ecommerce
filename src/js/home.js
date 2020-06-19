import React from 'react';


import Navbar from 'navbar';
import Dropdown from 'dropdown';
import Causelist from 'causelist';
import Quickview from 'quickview';
import Extension from 'extension';
import Quicknote from 'quicknote';
import Footer from 'footer';
import Topbanner from 'topbanner';
import Tictactoe from 'tictactoe';
import Sudoku from 'sudoku';
import Accordion from 'accordion';
import Fox from './widgets/fox';


import define from "./dendogram/index.js";
import { Runtime, Library, Inspector } from "./dendogram/runtime.js";





import { navbar_data, sidebar1_data, causelist_data, sidebar2_data, sidebar3_data, footer_data, accordion_items_data } from './data';

const Home = (props) => {

    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(document.body));
    return (
        <div>
            <div className="header">
                <Navbar {...navbar_data} xyz={this.state.toptext} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="mainbar-wrapper">
                        <Topbanner m={this} />
                        <div className="center causelist-wrapper">
                            <Accordion {...accordion_items_data} />
                        </div>
                    </div>
                    <div className="sidebar-wrapper">
                        <div>
                            <Quickview {...sidebar1_data} />
                            <Extension {...sidebar2_data} />
                        </div>
                    </div>

                </div>
                <div>


                </div>
                <div className="footer-wrapper margin_bottom_twenty">
                    <Footer {...footer_data} />

                </div>
            </div>

        </div>
    )

}


export default Home;