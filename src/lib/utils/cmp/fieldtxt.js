//TODO: Poder modificar el estilo con los parametros correspondientes
import React from 'react';
// import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
// import {getStrRandomb64} from "../fn/randoms";

// const FieldTxt = ({id, label, required, value, onChange, style, variant}) => {
const FieldTxt = (props) => {
    return (
        <TextField {...props} name={props.id} />
    );
};

// FieldTxt.propTypes = {
//     id: PropTypes.string,
//     label: PropTypes.string,
//     required: PropTypes.bool,
//     style: PropTypes.object,
//     variant: PropTypes.string
// }
//
// FieldTxt.defaultProps = {
//     id: getStrRandomb64(),
//     label: "Ingrese un texto",
//     required: true,
//     variant: null
// }

export default FieldTxt;