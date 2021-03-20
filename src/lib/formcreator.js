import React, { useEffect, useState } from 'react'
import { Button, Grid, Modal } from '@material-ui/core';
import useFormik from 'formik';

// TODO: windowType
/**
 * 
 * @param {JSON} data = {
 *  modal: boolean -> true/false Si el formulario estara o no dentro de un modal
 *  op: json -> {grid: ..., button: ..., ...} Los cambios a los valores por defecto
 *  windowType: string -> ["stepper", "tabpanel", "card",  "accordion"..] Sera el tipo de ventana que contendra el formulario
 * } 
 */
const FormCreator = ({ dataGet }) => {

    const [data, setData] = useState({
        ...dataInit,
        ...dataGet
    });

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <>
            <Grid
                {...data.op.grid}
            >
                <Button variant="contained" color="primary">
                    { data.x }
                </Button>
            </Grid>
        </>
    );
};

const defOptions = {
    grid: {
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
}

const dataInit = {
    modal: true,
    op: { ...defOptions },
    windowType: ''
}

export default FormCreator;