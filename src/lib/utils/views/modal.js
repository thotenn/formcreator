//TODO: Poder modificar style y position
import React from 'react'
import PropTypes from "prop-types";
import {Modal as ModalMaterial} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Modal = ({active, body, show, handleShow, style, position}) => {
    const classes = useStyles();
    // const [pos, setPos] = useState({})

    return (
        <>
            {
                (active ?
                    <ModalMaterial open={show} onClose={handleShow}>
                        <div style={getModalStyle()} className={classes.paper}>{body}</div>
                    </ModalMaterial> : body)
            }
        </>
    )
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    body: PropTypes.element.isRequired,
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    style: PropTypes.object,
    position: PropTypes.object
};
Modal.defaultProps = {
    active: true,
    body: <></>,
    show: true,
    handleShow: null,
    style: {
        position: 'absolute',
        width: 400,
        border: '2px solid #000',
    },
    position: {
        top: 50,
        left: 50
    }

};

export default Modal;