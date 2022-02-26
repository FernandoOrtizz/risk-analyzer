import './App.css';
import Appbar from "./Components/Organisms/Appbar";
import InitialForm from "./Components/Organisms/InitialForm";
import Matrix from "./Components/Organisms/Matrix";
import TableData from "./Components/Organisms/TableData";
import { useState} from "react";


function App() {
    const [rows, setRows] = useState([]);

    const handleRow = (row) =>{
        setRows([...rows, row])
    }


    return (
    <>
      <Appbar/>
      <InitialForm addRow={handleRow}/>
      <br/>
        <div className={"matrix-container"}>
            <Matrix/>
        </div>

        <TableData rows={rows}/>
    </>
  );
}

export default App;
