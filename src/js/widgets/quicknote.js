import React from 'react';




const Quicknote = () => {

    return (
        <div className="sidebaritem-wrapper quicklink3-wrapper" style={{ border: "1px solid lightgray" }}>
            <div className="sidebarheader">Quicknote</div>


            <div>
                <div className="quicklink3form">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write a quick note" />
                </div>
                <button type="button" className="btn btn-info quicklink3-button all_buttons">Save</button>
            </div>
        </div>


    );
}

export default Quicknote;