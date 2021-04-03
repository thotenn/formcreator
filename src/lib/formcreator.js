import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import {Button, Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import Modal from "./utils/views/modal";
import Paper from "./utils/views/paper";
import {makeStyles} from '@material-ui/core/styles';
import getStyle from "./utils/styles";
import FieldTxt from "./utils/cmp/fieldtxt";
import SelectThb from "./utils/cmp/select";

const TYPES = {
    TEXT: 'text',
    SELECT: 'select',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}
const getStyles = makeStyles((theme) => {
    return {...getStyle(theme)}
});

// TODO: windowType
/**
 *
 * @param {JSON} data = {
 *  modal: boolean -> true/false Si el formulario estara o no dentro de un modal
 *  op: json -> {grid: ..., button: ..., ...} Los cambios a los valores por defecto
 *  windowType: string -> ["simple", "stepper", "tabpanel", "card",  "accordion"..] Sera el tipo de ventana que contendra el formulario
 *  name
 *  title
 *  form : [
 *      {
            type: str = ['text/select/mselect/radio/check'],
            id: str,
            variant: str|null,
            required: boolean,
            label: str,
            items: null|(Array[json] = [{value:str|number, label: str|number}]),
            default: null|str|number,
        }
 *  ]
 * }
 */
const FormCreator = ({dataGet}) => {
    const data = {
        ...dataInit,
        ...dataGet
    };
    const [openModal, setOpenModal] = useState(data.modal);
    const currentStyle = getStyles();

    useEffect(() => {

    }, []);


    const formik = useFormik({
        initialValues: (() => {
            const f = data.form;
            const iVals = {};
            for (let k = 0; k < f.length; k++) {
                iVals[f[k].id] = (f[k].hasOwnProperty('default') ? f[k].default : "");
            }
            console.log(iVals);
            return iVals;
        })(),
        onSubmit: values => {
            console.log(values);
            console.log(JSON.stringify(values, null, 2));
        },
    });

    const buildFormItem = (fItem, key) => {
        /**
         * type
         * id
         * variant
         * required
         * label
         * items
         * default
         *
         * helper
         */
        if (fItem.type === TYPES.TEXT) {
            return <FieldTxt
                key={key}
                id={fItem.id}
                value={formik.values[fItem.id]}
                label={fItem.label}
                onChange={formik.handleChange}
                required={fItem.required}
            />
        } else if (fItem.type === TYPES.SELECT) {
            return <SelectThb
                key={key}
                id={fItem.id}
                value={formik.values[fItem.id]}
                label={fItem.label}
                labelid={fItem?.labelid}
                onChange={formik.handleChange}
                required={fItem.required}
                items={fItem.items}
                helper={fItem.helper}
                styles={currentStyle}
            />
        }
    }

    /**
     *
     * @param f object
     * @return {elements}
     */
    const buildForm = (f) => {
        // Crearemos primeramente los ids de initialValues de formik
        return f.map((item, key) => buildFormItem(item, key));
    }

    return <><Modal active={data.modal} show={openModal} body=
        {<Grid className={currentStyle.root} {...data.op.grid}>
            {data.title ?
                <Grid item xs={12}>
                    <Paper styles={currentStyle} content={<h3>{data.title}</h3>}
                    />
                </Grid> : <></>}
            <Grid item xs={6}>
                <br/>
                <form onSubmit={formik.handleSubmit}>
                    {buildForm(data.form)}
                    <br/><br/>
                    <Button variant="outlined" color="secondary" type="submit">Enviar</Button>
                </form>
                <br/><br/>
                <Button variant="contained" color="primary" onClick={() => setOpenModal(!openModal)}>
                    {data.x}
                </Button>
                {/*<FieldTxt label="texto 1" required={true}/>*/}
                {/*<FieldTxt id="t2" label="texto 2" required={false}/>*/}
            </Grid>
        </Grid>}
    /></>
};
FormCreator.propTypes = {
    dataGet: PropTypes.object.isRequired
}

const defOptions = {
    grid: {
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "center",
        spacing: 3
    }
}

const dataInit = {
    modal: true,
    op: {...defOptions},
    windowType: '',
    name: 'defaultname',
    title: null  // El titulo del formulario
}

const dataTest = {
    ...dataInit,
    title: 'HOLA QUE TAL',
    x: 'Presione aqui',
    form: [
        {
            type: TYPES.TEXT,
            id: 't1',
            variant: null,
            required: true,
            label: 'Ingrese un texto',
            items: null,
            default: "Soy un texto"
        },
        {
            type: TYPES.TEXT,
            id: 't2',
            variant: null,
            required: false,
            label: 'Ingrese un segundo texto',
            items: null
        },
        {
            type: TYPES.SELECT,
            id: 'ss1',
            variant: null,
            required: true,
            label: 'Seleccione un item',
            helper: 'Valores numericos',
            default: 0,
            items: [
                {value: 0, label: 'Ninguno'},
                {value: 1, label: 'Item 1'},
                {value: 2, label: 'Item 2'},
                {value: 3, label: 'Item 3'},
            ]
        }
    ]
}


export {
    FormCreator,
    dataTest
};