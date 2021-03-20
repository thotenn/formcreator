import React, { Component } from 'react'
import './app.css';

import FormCreator from './lib/formcreator';

const App = ({ }) => {
    return (
        <>
            <FormCreator dataGet={ {x: "hola como estan"} }/>
        </>
    );
}

export default App;