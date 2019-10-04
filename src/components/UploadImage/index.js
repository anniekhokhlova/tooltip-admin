import React, { useState } from 'react';
import { Image } from "../Image";
import { Tooltip } from "../Tooltip";
import { StyledUploadImageView, StyledDropContainer, FileInput, InputLabel, DragText } from "./Styled"

export const UploadImage = ({tooltipState, imageUrl, setImagePreviewUrl}) => {
    const [isDragged, setDragged] = useState(false);

    const previewImg = file => {
        let reader = new FileReader();
        reader.onloadend = () => setImagePreviewUrl(reader.result);
        reader.readAsDataURL(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragged(false);
        let file = e.dataTransfer.files[0];

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

    const checkType = file => {
        let imageType = /image.*/;
        if (!file) {
            alert('Please upload the image');
        } else if (!file.type.match(imageType)) {
            alert('Only png, jpg and gif are supported')
        } else {
            previewImg(file);
        }
    };

    const handleImageChange = ({target : {files}}) => {
        let file = files[0];
        checkType(file);
    };

    return (
        <StyledUploadImageView>
            <FileInput
                type="file"
                id='file'
               accept="image/*"
               onChange={handleImageChange}
            />
            <InputLabel htmlFor='file'>
                Select an image...
            </InputLabel>
            {!imageUrl ?
                <StyledDropContainer
                    isDragged={isDragged}
                    onDrop={onDrop}
                    onDragEnter={onDragEvents}
                    onDragOver={onDragEvents}
                    onDragLeave={onDragLeave} >
                    <DragText>...or drag it here</DragText>
                </StyledDropContainer> :
                <Tooltip detailsView {...tooltipState}>
                    <Image src={imageUrl} />
                </Tooltip>
            }
        </StyledUploadImageView>
    )
};
