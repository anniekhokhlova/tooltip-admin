import React from 'react';
import { FormWrapper, FormHeader, Form, Label, Input, InputElement, ColorInput } from './Styled';

export const TooltipForm = ({onChange, tooltipState}) => {
    const { text, position, textColor, color } = tooltipState;

    const onChangeHandler = ({target: { name, value }}) => onChange({...tooltipState, [name]: value});

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
                        value={text}
                        placeholder='Tooltip text'
                    />
                </Input>
                <Input>
                    <Label>Background color</Label>
                    <ColorInput
                        type='color'
                        name='color'
                        onChange={onChangeHandler}
                        value={color}
                    />
                </Input>
                <Input>
                    <Label>Text color</Label>
                    <ColorInput
                        type='color'
                        name='textColor'
                        onChange={onChangeHandler}
                        value={textColor}
                    />
                </Input>
                <Input>
                    <Label>Position</Label>
                    <select name='position' onChange={onChangeHandler} value={position}>
                        <option value="BOTTOM">Bottom</option>
                        <option value="TOP">Top</option>
                        <option value="LEFT">Left</option>
                        <option value="RIGHT">Right</option>
                    </select>
                </Input>
            </Form>
        </FormWrapper>
    );
};
