import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "./Image";

const StyledAddImageView = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 1px solid black;
`;

const FileInput = styled.input`
    border: 1px solid black;
    padding: 10px;
    margin: 15px;
    cursor: pointer;
`;


export const AddImageView = () => {
   const [imagePreviewUrl, uploadImagePreview] = useState(null);

    const previewImg = (file) => {
        let reader = new FileReader();
        reader.onloadend = () => uploadImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        let dt = e.dataTransfer;
        let file = dt.files[0];

        checkType(file)
    };

    const checkType = (file) => {
        let imageType = /image.*/;
        if (!file.type.match(imageType)) {
            console.log('not image');
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
        <StyledAddImageView onDrop={handleDrop}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragOver={(e) => e.preventDefault()}
                            onDragLeave={(e) => e.preventDefault()} >
                <FileInput type="file"
                           accept="image/*"
                           onChange={handleImageChange} />
            {imagePreviewUrl ? <Image src={imagePreviewUrl} Tooltip={null}/> : null}
        </StyledAddImageView>
    )
};
