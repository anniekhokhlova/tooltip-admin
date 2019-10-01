import React from 'react';
import styled from 'styled-components';
import {Tooltip} from "./Tooltip";

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
`;

const StyledImage = styled.img`
     width: 100%;
`;

const ImageWrapper = styled.div`
    position: relative;
    margin: 5px;
    width: ${({detailsView}) => detailsView ? '400px' : '250px'};
    height: ${({detailsView}) => detailsView ? '400px' : '250px'};
`;



export const Image = ({detailsView, src, Tooltip = null}) => {
    return (
        <ImageWrapper detailsView={detailsView}>
            <ImageContainer>
                <StyledImage src={src} />
            </ImageContainer>
            {Tooltip}
        </ImageWrapper>
    )
};

