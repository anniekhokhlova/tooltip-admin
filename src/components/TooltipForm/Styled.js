import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const FormHeader = styled.div`
    margin: 0;
    margin-bottom: 15px;
`;

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    background-color: #f5f7f8;
    border-radius: 4px;
    color: #2b2b2b;
    margin: 40px 15px;
    padding: 7%;
`;

export const Label = styled.label`
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

export const Input = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 7px;
`;

export const InputElement = styled.input`
    outline: none;
    border: 1px solid #e2e7e8;
    border-radius: 1px;
    font: inherit;
    display: block;
    padding:5px;
    width: 60%;
    
    &:focus {
        outline: none;
        background-color: #e9eeef;
    }
`;

export const ColorInput = styled(InputElement)`
    border: 0;
    width: 35px;
    height: 35px;
`;
