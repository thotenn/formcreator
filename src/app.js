import React from 'react'
import './app.css';
import {FormCreator, dataTest} from './lib/formcreator';
// import SimpleSelect from "./lib/tests/select";

const App = () => {
    // const datatest = {
    //     modal: false,
    //     title: 'Prueba',
    //     x: "hola como estan"
    // }

    return (
        <>
            {/*<SimpleSelect />*/}
            <FormCreator dataGet={dataTest}/>
        </>
    );
}

export default App;