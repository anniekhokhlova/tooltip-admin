import styled from 'styled-components';

export const StyledUploadImageView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 50%;
`;

export const StyledDropContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:center;
    width: 90%;
    padding-top: 100%;
    outline: 1px dashed #2b2b2b;
    align-self: center;

    background-color: ${({isDragged}) => isDragged ? '#ffffff' : '#edf2f5'};
    outline-offset: ${({isDragged}) => isDragged ? '-20px' : '-10px'};
    box-sizing: border-box;
    transition: 0.15s;
`;

export const FileInput = styled.input`
    cursor: pointer;
    margin: 0;
    padding: 0;
    opacity: 0;
    width: 0;
    height: 0;
    
    &::-webkit-file-upload-button {
        visibility: hidden;
    }
`;

export const InputLabel = styled.label`
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    background: #39D2B4;
    color: #fff;
    transition: all .4s;
    padding: 4px 5px;
    text-align: center;
    vertical-align: middle;
    line-height: 35px;
    width: 160px;
    height: 35px;
    margin-bottom: 35px;
    
    &:hover, &:active, &:focus {
        background: #34495E;
        color: #39D2B4;
    }
`;

export const DragText = styled.span`
    height: 0;
    display: flex;
    position: absolute;
    top: 55%;
`;
