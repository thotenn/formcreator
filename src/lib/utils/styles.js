/**
 * TODO: Mejorar funcion getStyle, para que envie o todo o solo la propiedad que
 * se necesite y tambien mergeando con otro json de propiedades
 * que quede tipo setStyle = ({all: bool, prop: str, jsonmerge: object })
 */

const getStyle = (theme) => {
    return {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: "100%",
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        cmp: {
            textfield: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '70ch',
                },
            },
            select: {
                formControl: {
                    margin: theme.spacing(1),
                    minWidth: "100%",
                },
                selectEmpty: {
                    marginTop: theme.spacing(2),
                },
            }
        }
    };
};

export default getStyle;