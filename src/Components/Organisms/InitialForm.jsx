import React, {useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";


const InitialForm =({addRow} ) =>{

    const [probability, setProbability] = useState(0);
    const [consequences, setConsequences] = useState(0);
    const [handleLevel, setHandleLevel] = useState(0)
    const [name, setName] = useState(' ');

    const handleProbabilityChange =(e) =>{
        setProbability(e.target.value)
    }

    const handleConsequencesChange =(e) =>{
        setConsequences(e.target.value)
    }

    const handleSelectChange =(e) =>{
        setHandleLevel(e.target.value)
    }

    const onNameChange =(e)=>{
        setName(e.target.value)
    }

    const onSendForm =()=>{
        let color = ""
        let plan = ""
        let completePlan = ""
        const risk = Number(probability)*Number(consequences)

        if(handleLevel===4){
            completePlan="Se recomienda -transferir- debido a que la organización no puede manejar el riesgo"
        }else{
            if(risk>=12 && handleLevel!==4){
                plan="evitar"
            }else if(risk>=6 && risk<12 && handleLevel!==4){
                plan="mitigar"
            }else if(probability<=2){
                plan="aceptar"

            }
            completePlan=`Se recomienda -${plan}- el riesgo debido a que es -${document.getElementById("select1").innerText}-, y el impacto sería -${document.getElementById("select2").innerText}-`

        }


        if(risk>=1 && risk<=4){
            color = "Verde"
        }else if (risk>=5 && risk<=8){
            color = "Naranja"
        }else if (risk>8){
            color = "Rojo"
        }
        addRow( {name: name, probability: document.getElementById("select1").innerText,
            consequences: document.getElementById("select2").innerText, color: color, handleLevel: document.getElementById("select3").innerText, result: risk,
            completePlan:completePlan
        })
        document.getElementById("name").value = ""
        setProbability(0)
        setConsequences(0)
        setHandleLevel(0)
    }

    return(
        <>
            <article>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m:2},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="name" label="Nombre" variant="standard" onChange={onNameChange}/>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Probabilidad</InputLabel>

                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="select1"
                    value={probability}
                    onChange={handleProbabilityChange}
                    label="Ingrese la probabilidad"
                >
                    <MenuItem value={1}>Muy improbable</MenuItem>
                    <MenuItem value={2}>Improbable</MenuItem>
                    <MenuItem value={3}>Posible</MenuItem>
                    <MenuItem value={4}>Probable</MenuItem>
                    <MenuItem value={5}>Muy probable</MenuItem>
                </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Impacto</InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="select2"
                        value={consequences}
                        onChange={handleConsequencesChange}
                        label="Ingrese la probabilidad"
                    >
                        <MenuItem value={1}>Insignificante</MenuItem>
                        <MenuItem value={2}>Menor</MenuItem>
                        <MenuItem value={3}>Moderado</MenuItem>
                        <MenuItem value={4}>Mayor</MenuItem>
                        <MenuItem value={5}>Severo</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Manejabilidad</InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="select3"
                        value={handleLevel}
                        onChange={handleSelectChange}
                        label="Ingrese la probabilidad"
                    >
                        <MenuItem value={1}>Fácil</MenuItem>
                        <MenuItem value={2}>Medio</MenuItem>
                        <MenuItem value={3}>Difícil</MenuItem>
                        <MenuItem value={4}>La organización no puede manejar el riesgo</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <Button variant="contained" onClick={onSendForm}>Agregar</Button>
            </Box>
            </article>
        </>
    );
}

export default InitialForm