import React, {useState, useEffect} from 'react';

export default function Sudoku() {
    const [box, setBox] = useState({});
    const [solution, setSolution] = useState(generateSolution());
    const [mask, setMask] = useState(getMask());
    const [number, setNumber] = useState(1);

    useEffect(() => {
        // Update the document title using the browser API
            console.log({box, number});
            if(isVictory()){
                alert("wins")
            }
        });

    function generateSolution() {
        return [
            4, 3, 5, 2, 6, 9, 7, 8, 1,
            6, 8, 2, 5, 7, 1, 4, 9, 3,
            1, 9, 7, 8, 3, 4, 5, 6, 2,
            8, 2, 6, 1, 9, 5, 3, 4, 7,
            3, 7, 4, 6, 8, 2, 9, 1, 5,
            9, 5, 1, 7, 4, 3, 6, 2, 8,
            5, 1, 9, 3, 2, 6, 8, 7, 4,
            2, 4, 8, 9, 5, 7, 1, 3, 6,
            7, 6, 3, 4, 1, 8, 2, 5, 9
        ]
    }
    function getMask() {
        return [
            0, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]
    }

    function isVictory() {
        for (var i = 0; i < 81; i++) {
            if (mask[i] == 1) {
                continue;
            }
            if (mask[i] == 0 && box[i] == solution[i]) {
                // Good
            } else {
                return false;
            }
        }
        return true;
    }

    function boxOnClick(index) {
        if (mask[index] == 0) {
            // 0 means mutable
            box[index] = number;
        }
        setBox(Object.assign({}, box));
    }

    function getNumber(index) {
        return mask[index] == 1 ? solution[index] : box[index];
    }

    function getClass(index) {
        var row = Math.floor(index / 9);
        var c = "smallbox ";
        if (index % 9 == 0) {
            c += " clear ";
        }
        if (index % 3 == 2) {
            c += " b_right ";
        } else if (index % 3 == 0) {
            c += " b_left ";
        }

        if (row % 3 == 2) {
            c += " b_bottom ";
        } else if (row % 3 == 0) {
            c += " b_top ";
        }
        if (mask[index] == 1) {
            c += " solutionbox ";
        } else {
            if (!(box[index] > 0)) {

            }
            else if (solution[index] == box[index]) {
                c += " correct ";
            } else {
                c += " incorrect ";
            }
        }
        
        return c;
    }

    return (
        <div>
            <div className="sudoku">
                {
                    solution.map((item, index) => {
                        return <div className={getClass(index)} onClick={(e) => { boxOnClick(index); }}>{getNumber(index)}</div>
                    })
                }

            </div>

            <div>
                <div className="number-row">
                    <div className="numberbox" onClick={(e) => { setNumber(1) }}>1</div>
                    <div className="numberbox" onClick={(e) => { setNumber(2) }}>2</div>
                    <div className="numberbox" onClick={(e) => { setNumber(3) }}>3</div>
                </div>
                <div className="number-row">
                    <div className="numberbox" onClick={(e) => { setNumber(4) }}>4</div>
                    <div className="numberbox" onClick={(e) => { setNumber(5) }}>5</div>
                    <div className="numberbox" onClick={(e) => { setNumber(6) }}>6</div>
                </div>
                <div className="number-row">
                    <div className="numberbox" onClick={(e) => { setNumber(7) }}>7</div>
                    <div className="numberbox" onClick={(e) => { setNumber(8) }}>8</div>
                    <div className="numberbox" onClick={(e) => { setNumber(9) }}>9</div>
                </div>
            </div>
        </div>
    )
}