import React, { useState } from "react";
import './App.css'

const Tabel = () => {

   const [luffy, setLuffy] = useState(Array(9).fill(''));
   const [playerTurn, setTurn] = useState(true);

    const blockClick = (game) => {

        const boxcell = game.target.closest('td[data-cell]');
        if(!boxcell) return;
        const name = boxcell.dataset.cell;

        const dragon = parseInt(name, 10);


        console.log(dragon);

        if(luffy[dragon]) return;

        const zoro = [...luffy];

        zoro[dragon] = playerTurn ? "https://95d38e3f94e85fb722ac8a348c7abe6a50060c55-m.proxy5.startpage.com/npd/hnjojq/j/SR/mTPF5CQuJEPNRdmq44oNiToBA//////////736x/ee/0e/42/ee0e42845569dff60b5123d2d630b1d0.jpg"  : "https://i.pinimg.com/1200x/9c/7d/50/9c7d50d40d9b9e4e91b8eae6ba17a6b0.jpg";

        console.log(playerTurn);

        setLuffy(zoro);

        setTurn(!playerTurn);

        

        

    };


    return(
        <table onClick={blockClick}>
            <caption><h1>Tic - Tac - Toe</h1></caption>
            <tr>
                <td data-cell="0" className="data-cell"><img src={luffy[0]} /></td>
                <td data-cell="1" className="data-cell"><img src={luffy[1]} /></td>
                <td data-cell="2" className="data-cell"><img src={luffy[2]} /></td>
            </tr>
             <tr>
                <td data-cell="3" className="data-cell"><img src={luffy[3]} /></td>
                <td data-cell="4" className="data-cell"><img src={luffy[4]} /></td>
                <td data-cell="5" className="data-cell"><img src={luffy[5]} /></td>
            </tr>
             <tr>
                <td data-cell="6" className="data-cell"><img src={luffy[6]} /></td>
                <td data-cell="7" className="data-cell"><img src={luffy[7]} /></td>
                <td data-cell="8" className="data-cell"><img src={luffy[8]} /></td>
            </tr>
        </table>
    );
};

export default Tabel;