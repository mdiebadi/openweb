import React from 'react';
import styled from '@emotion/styled';
import {string, bool, func} from 'prop-types';

const CheckBox = styled('div')`
    padding: 2px;
    input[type='checkbox']{
        opacity: 0;
    }
    label{
        position: relative;
        cursor: pointer;
        margin-left: 10px;
        padding-left: 5px;
        font-weight: bold;
        font-style: italic;
        font-size: 18px;
        text-transform: uppercase;
    }
    label::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid;
        position: absolute;
        top: 1px;
        left: -20px;
    }
    label::after {
        content: '';
        display:inline-block;
        height: 6px;
        width: 9px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        position: absolute;
        top: 4px;
        left: -16px;

        transform: rotate(-45deg);
    }
    input[type='checkbox'] + label::after {
        content: none;
    }
    input[type='checkbox']:checked + label::after {
        content: ''
    }
`

const Filter = ({skill, checked, onClickHandler}) => {
    return (
        <CheckBox>
            <input type="checkbox" id={skill} name={skill} value={skill} checked={checked} onChange={onClickHandler} />
            <label htmlFor={skill} >
                {skill} 
            </label>
        </CheckBox>
    )
}
Filter.defaultProps = {
    checked: false,
}
Filter.propTypes = {
    skill: string.isRequired,
    checked: bool,
    onClickHandler: func.isRequired,
}

export default Filter;