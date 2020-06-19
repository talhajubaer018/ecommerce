import React, {useState, useEffect} from 'react';

export default function Tictactoe () {
    useEffect(() => {
    // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
        console.log({box1, box2, box3, box4, box5, box6, box7, box8, box9, counter, xoro});
        if(victory()){
            alert("wins")
        }
    });

    const [counter, setCounter] = useState(0);
    const [xoro, setXorO] = useState('X');
    const [box1, setBox1] = useState('');
    const [box2, setBox2] = useState('');
    const [box3, setBox3] = useState('');
    const [box4, setBox4] = useState('');
    const [box5, setBox5] = useState('');
    const [box6, setBox6] = useState('');
    const [box7, setBox7] = useState('');
    const [box8, setBox8] = useState('');
    const [box9, setBox9] = useState('');

    function boxOnclick(box, callback) {
        
        if (box == '') {
            setCounter(counter + 1);
            if (counter % 2 == 0) {
                setXorO('O');
            } else {
                setXorO('X');
            }
            
            callback(xoro);
        }
        
    }

    function victory() {
        if (box1 != '' && box1 == box2 && box1 == box3) {
            return true;
        }
        if (box4 != '' && box4 == box5 && box4 == box6) {
            return true;
        }
        if (box7 != '' && box7 == box8 && box7 == box9) {
            return true;
        }
        if (box1 != '' && box1 == box4 && box1 == box7) {
            return true;
        }
        if (box2 != '' && box2 == box5 && box2 == box8) {
            return true;
        }
        if (box3 != '' && box3 == box6 && box3 == box9) {
            return true;
        }
        if (box1 != '' && box1 == box5 && box1 == box9) {
            return true;
        }
        if (box3 != '' && box3 == box5 && box3 == box7) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <div>{counter}</div>
            <div className="box-row">
                <div className="box" onClick={(e) => { boxOnclick(box1, setBox1); }}>{box1}</div>
                <div className="box" onClick={(e) => { boxOnclick(box2, setBox2); }}>{box2}</div>
                <div className="box" onClick={(e) => { boxOnclick(box3, setBox3); }}>{box3}</div>
            </div>
            <div className="box-row">
                <div className="box" onClick={(e) => { boxOnclick(box4, setBox4); }}>{box4}</div>
                <div className="box" onClick={(e) => { boxOnclick(box5, setBox5); }}>{box5}</div>
                <div className="box" onClick={(e) => { boxOnclick(box6, setBox6); }}>{box6}</div>
            </div>
            <div className="box-row">
                <div className="box" onClick={(e) => { boxOnclick(box7, setBox7); }}>{box7}</div>
                <div className="box" onClick={(e) => { boxOnclick(box8, setBox8); }}>{box8}</div>
                <div className="box" onClick={(e) => { boxOnclick(box9, setBox9); }}>{box9}</div>
            </div>
        </div>
    )    
}
