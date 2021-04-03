import React from 'react';
import {Paper as PaperMaterial} from '@material-ui/core';

const Paper = ({content, styles}) => {

    return (
        <PaperMaterial className={styles.paper}>
            {content}
        </PaperMaterial>
    );
};

export default Paper;