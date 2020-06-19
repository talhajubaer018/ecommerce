import React from 'react';

import Dropdown from './dropdown';

import { sortby_data } from '../data';

class Topbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Print Cause List'
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        var new_text = this.state.text.substring(0, this.state.text.length - 1);
        this.setState({ text: new_text });
    }
    render() {
        return (
            <div className="row">
                {/*<input onKeyUp={(e)=>{var newvalue = e.target.value; this.props.m.setState({toptext: newvalue})}} />*/}
                <div className="info col-sm-9 col-md-9 col-lg-9">
                    <div className="margin_bottom_ten margin_top_ten">
                        <div className="inline">Good Morning</div>&nbsp;&nbsp;
                        <div className="inline bold">Khaled Saifullah</div>
                        <div className="bold">Today is Tuesday, 09 July,2019</div>
                    </div>
                    <div className="margin_bottom_ten margin_top_ten">
                        <div className="bold">Here is your cause list today.</div>
                        <div>Tap on a case number to add/view details.</div>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <div className="textright margin_bottom_ten margin_top_ten">
                        <button type="button" className="btn btn-info all_buttons" onClick={this.onClick}><i class="fas fa-print"></i>&nbsp;&nbsp;{this.state.text}</button>
                    </div>
                    <div className="textright ">
                        <Dropdown  {...sortby_data} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Topbanner;