import React from 'react'
import { Button } from '@material-ui/core';
import useFormik from 'formik';

const FormCreator = ({ data }) => {
    return (
        <>
            <Button variant="contained" color="primary">
                { data.x }
            </Button>
        </>
    );
};

export default FormCreator;