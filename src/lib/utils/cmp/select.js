import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectThb = ({id, value, onChange, items, required, label, helper, labelid, styles}) => {
    const [idLabel, setIdLabel] = useState(id + '-label');
    useEffect(() => {
        if (labelid !== undefined) {
            setIdLabel(labelid);
        }
    }, [labelid])
    return (
        <FormControl className={styles.formControl}>
            {(label ?
                <InputLabel id={idLabel}>{label}</InputLabel>
                : <></>)}
            <Select id={id} labelId={idLabel} value={value} onChange={onChange} name={id} required={required}>
                {items.map((item, key) => (
                    <MenuItem key={key} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
            {(helper
                ? <FormHelperText>{helper}</FormHelperText>
                : <></>)}
        </FormControl>
    );
};

SelectThb.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    label: PropTypes.string,
    helper: PropTypes.string,
    labelid: PropTypes.string,
    styles: PropTypes.object
}

export default SelectThb;
