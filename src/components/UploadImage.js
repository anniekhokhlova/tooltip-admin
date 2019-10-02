import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {Tooltip} from "./Tooltip";

const StyledUploadImageView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

const StyledDropImage = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:center;
    width: 400px;
    height: 400px;
    outline: 1px dashed #2b2b2b;
    align-self: center;

    background-color: ${({isDragged}) => isDragged ? '#ffffff' : '#edf2f5'};
    outline-offset: ${({isDragged}) => isDragged ? '-20px' : '-10px'};
    box-sizing: border-box;
    transition: 0.15s;
`;

const FileInput = styled.input`
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

const InputLabel = styled.label`
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
        margin-bottom: 55px;
    
    &:hover, &:active, &:focus {
        background: #34495E;
        color: #39D2B4;
    }
`;


export const UploadImage = ({tooltipState, imageUrl}) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);
    const [isDragged, setDragged] = useState(false);

    const previewImg = (file) => {
        let reader = new FileReader();
        reader.onloadend = () => setImagePreviewUrl(reader.result);
        reader.readAsDataURL(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragged(false);
        let dt = e.dataTransfer;
        let file = dt.files[0];

        checkType(file)
    };

    const onDragEvents = (e) => {
        e.preventDefault();
        setDragged(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setDragged(false);
    };

    const checkType = (file) => {
        let imageType = /image.*/;
        if (!file.type.match(imageType)) {
            alert('not image');
        } else if (!file){
            console.log('dont see file');
        } else {
            previewImg(file);
        }
    };

    const handleImageChange = (e) => {
        let file = e.target.files[0];
        checkType(file);
    };

    return (
        <StyledUploadImageView>
            <FileInput type="file"
                       id='file'
                       accept="image/*"
                       onChange={handleImageChange} />
                       <InputLabel htmlFor='file'>Select an image...</InputLabel>
            <StyledDropImage isDragged={isDragged} onDrop={onDrop}
                                onDragEnter={onDragEvents}
                                onDragOver={onDragEvents}
                                onDragLeave={onDragLeave} >
                {imagePreviewUrl ? <Tooltip {...tooltipState}><Image src={imagePreviewUrl} detailsView/></Tooltip> : <p>...or drag it here</p> }
            </StyledDropImage>
        </StyledUploadImageView>

    )
};
