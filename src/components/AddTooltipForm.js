import React, {useState} from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;

const FormHeader = styled.div`
    margin: 0;
    margin-bottom: 15px;
    `;


const Form = styled.form`
    margin: 40px 15px;
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    height: 250px;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    background-color: #f5f7f8;
    border-radius: 4px;
    color: #2b2b2b;
`;

const Label = styled.label`
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    
`;


const Input = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 7px;
`;

const InputElement = styled.input`
    outline: none;
    border: 1px solid #e2e7e8;
    border-radius: 1px;
    font: inherit;
    display: block;
    padding:5px;
    
    &:focus {
        outline: none;
        background-color: #e9eeef;
    }
`;

const ColorInput = styled(InputElement)`
    border: 0;
    width: 35px;
    height: 35px;
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
        props.onChange({...props.currentState, [name]: value});
    };

        return (
            <FormWrapper>
                <Form onChange={onChangeHandler}>
                    <FormHeader>Tooltip settings</FormHeader>
                    <Input>
                        <Label>Tooltip text</Label>
                        <InputElement
                            type='text'
                            name='text'
                            onChange={onChangeHandler}
                            value={props.currentState.text}
                            placeholder='Tooltip text'
                        />
                    </Input>
                    <Input>
                        <Label>Background color</Label>
                        <ColorInput
                            type='color'
                            name='color'
                            onChange={onChangeHandler}
                            value={props.currentState.color}
                        />
                    </Input>
                    <Input>
                        <Label>Text color</Label>
                        <ColorInput
                            type='color'
                            name='textColor'
                            onChange={onChangeHandler}
                            value={props.currentState.textColor}
                        />
                    </Input>
                    <Input>
                        <Label>Position</Label>
                        <select name='position' onChange={onChangeHandler} value={props.currentState.position}>
                            <option value="BOTTOM">Bottom</option>
                            <option value="TOP">Top</option>
                            <option value="LEFT">Left</option>
                            <option value="RIGHT">Right</option>
                        </select>
                    </Input>
                </Form>
            </FormWrapper>
        );
}
