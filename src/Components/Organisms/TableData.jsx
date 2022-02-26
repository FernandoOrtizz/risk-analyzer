import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";



const TableData = ({rows}) => {

    console.log(rows)


    return(
        <div className={'table'}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Nivel de probabilidad</TableCell>
                            <TableCell align="right">Grado de impacto</TableCell>
                            <TableCell align="right">Manejabilidad</TableCell>
                            <TableCell align="right">Resultado/Tono</TableCell>
                            <TableCell align={"center"}>Plan de riesgo</TableCell>
                        </TableRow>
                    </TableHead>
                     <TableBody>
                        {Array.isArray(rows) && rows.map((rows) => (

                            <TableRow
                                key={rows.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {rows.name}
                                </TableCell>
                                <TableCell align="right">{rows.probability}</TableCell>
                                <TableCell align="right">{rows.consequences}</TableCell>
                                <TableCell align="right">{rows.handleLevel}</TableCell>
                                <TableCell align="right">{`${rows.result}/${rows.color}`}</TableCell>
                                <TableCell align="right">{rows.completePlan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default TableData
