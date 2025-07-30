import React, { useState } from "react";
import './App.css'

const Tabel = () => {

    const [maple, setMaple] = useState(Array(9).fill(''));

    function handleClick(event) {

            const clicked = event.target.closest('td[data-cell]');

            const dataName = clicked.dataset.cell;

            if(!dataName) return;

            console.log('you clicked me : ', dataName)




    };

   
    return(

        <table onClick={handleClick}>
            <caption><h1>Tic - Tac - Toe</h1></caption>
            <tr>
                <td data-cell="0" ><p className="table-content"></p></td>
                <td data-cell="1" ><p className="table-content"></p></td>
                <td data-cell="2" ><p className="table-content"></p></td>
            </tr>
             <tr>
                <td data-cell="3" ><p className="table-content"></p></td>
                <td data-cell="4" ><p className="table-content"></p></td>
                <td data-cell="5" ><p className="table-content"></p></td>
            </tr>
             <tr>
                <td data-cell="6" ><p className="table-content"></p></td>
                <td data-cell="7" ><p className="table-content"></p></td>
                <td data-cell="8" ><p className="table-content"></p></td>
            </tr>
        </table>
    );
};

export default Tabel;