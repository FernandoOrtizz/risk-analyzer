import React, {useState} from "react";
import {Box, Grid} from "@mui/material";
import MatrixItem from "../Atoms/MatrixItem";

const Matrix =() =>{
    const data = [{name: "some", number:3}, {name: "hjvkjvhhvjnhcvF SW", number:9}, {name: "hjvnhcvF SW", number:25}]

    // data.map(process =>(
    //     document.getElementById(`div${process.number}`).value = JSON.stringify(data.filter(element => element.number===process.number))
    // )
    // )

    return(
        <>
            <div className="matrix">
                <div id={"div1"} className="matrix-item-green"><p>1</p></div>
                <div id={"div2"} className="matrix-item-green"><p>2</p></div>
                <div id={"div3"} className="matrix-item-green"><p>3</p></div>
                <div id={"div4"} className="matrix-item-green"><p>4</p></div>
                <div id={"div5"} className="matrix-item-yellow"><p>5</p></div>
                <div className="matrix-item-green"><p>2</p></div>
                <div className="matrix-item-green"><p>4</p></div>
                <div id={"div6"} className="matrix-item-yellow"><p>6</p></div>
                <div id={"div8"} className="matrix-item-yellow"><p>8</p></div>
                <div id={"div10"} className="matrix-item-red"><p>10</p></div>
                <div className="matrix-item-green"><p>3</p></div>
                <div className="matrix-item-yellow"><p>6</p></div>
                <div id={"div9"} className="matrix-item-yellow"><p>9</p></div>
                <div id={"div12"} className="matrix-item-red"><p>12</p></div>
                <div id={"div15"} className="matrix-item-red"><p>15</p></div>
                <div className="matrix-item-green"><p>4</p></div>
                <div className="matrix-item-yellow"><p>8</p></div>
                <div className="matrix-item-red"><p>12</p></div>
                <div id={"div16"} className="matrix-item-red"><p>16</p></div>
                <div id={"div20"} className="matrix-item-red"><p>20</p></div>
                <div className="matrix-item-yellow"><p>5</p></div>
                <div className="matrix-item-yellow"><p>10</p></div>
                <div className="matrix-item-red"><p>15</p></div>
                <div className="matrix-item-red"><p>20</p></div>
                <div id={"div25"} className="matrix-item-red"><p>25</p></div>
            </div>
        </>
    );
}

export default  Matrix