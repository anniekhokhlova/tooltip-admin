import React from 'react';
import styled from 'styled-components';

const RemoveButton = `
        color: white;
        background-color: #16181b;
        border-color: #16181b;
        
        &:hover {
            color: #16181b;
            background-color: transparent;
            border-color: #16181b;
        }
    
        &:active {
            color: #16181b;
            background-color: transparent;
            border-color: #16181b;
        }
        `;

const AddButton = `
        color: #e7692a;
        background-color: transparent;
        border-color: #e7692a;
        
        &:hover {
            background-color: #e7692a;
            color: white;
        }
    
        &:active {
            background-color: #e7692a;
            color: white;
        }
    `;

export const Button = styled.button`
        font-size: 16px;
        margin: 10px;
        padding: 7px 12px;
        border: 1px solid;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
        height: 35px;
        line-height: 1;
        box-sizing: border-box;
        
        ${({add}) => add ? AddButton : ''}
        ${({remove}) => remove ? RemoveButton : ''}
    `;

