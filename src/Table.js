import React from "react";
import './App.css'

const Tabel = ({game}) => {
    return(

        <table>
            <caption><h1>Tic - Tac - Toe</h1></caption>
            <tr>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
            </tr>
             <tr>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
            </tr>
             <tr>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
                <td><p className="table-content">{game}</p></td>
            </tr>
        </table>
    );
};

export default Tabel;