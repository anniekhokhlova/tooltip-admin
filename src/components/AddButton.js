import styled from 'styled-components';

export const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 50px;
    height: 50px;
    background-color: #3cc5cf;
    color: white;
    border-radius: 50%;
    padding: 5px;
    margin: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: color 0.2s ease, background-color 0.2s ease, transform 0.3s ease;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        border: solid 2px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        transition: all 0.3s ease;
        border-color: #3cc5cf;
        box-sizing: border-box;
    }

    &:hover:after {
        transform: scale(1);
        box-shadow: 10px 0 20px rgba(0, 0, 0, 0.19), 6px 0 6px rgba(0, 0, 0, 0.23);
    }

    &:hover {
        background-color: transparent;
        transform: rotate(90deg);
        cursor: pointer;
        box-shadow: none;
        border-color: #cd8484;
        color: #3cc5cf
    }
`;
