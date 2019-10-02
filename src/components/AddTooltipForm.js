import React, {useState} from 'react';
import styled from 'styled-components';


const Form = styled.form`
    margin: 20px auto;
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;
`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
`;

const Input = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
`;

const InputElement = styled.input`
    outline: none;
    border: 1px solid #ccc;
    font: inherit;
    display: block;
    
    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;

export const TooltipForm = (props) => {
    console.log(props);
    const mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number");
        }
    }

   const onChangeHandler = ({target}) => {
        const {name, value} = target;
        console.log(name, value);
        props.onChange({...props.currentState, [name]: value});
    };

        return (
            <Form onChange={onChangeHandler}>
                <Input>
                    <Label>Tooltip text</Label>
                    <InputElement
                        type='text'
                        name='text'

                        value={props.currentState.text}
                        placeholder='Tooltip text'
                    />
                </Input>
                <Input>
                    <Label>Background color</Label>
                    <InputElement
                        type='color'
                        name='color'

                        value={props.currentState.color}
                    />
                </Input>
                <Input>
                    <Label>Text color</Label>
                    <InputElement
                        type='color'
                        name='textColor'

                        value={props.currentState.textColor}
                    />
                </Input>
                <Input>
                    <Label>Position</Label>
                    <select name='position' value={props.currentState.position}>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </Input>
            </Form>
        );
}
