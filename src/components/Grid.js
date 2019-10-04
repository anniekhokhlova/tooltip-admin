import React from 'react';
import styled from 'styled-components';
import { Image } from "./Image";
import { Tooltip } from "./Tooltip/";

const StyledGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: calc(100% - 20%);
    margin-top: 40px;
`;

export const Grid = ({ data, onImageClick }) => (
    <StyledGrid>
        {data.map((item) =>
            <Tooltip {...item.tooltip} key={item.id}>
                <Image src={item.imageUrl} onClick={onImageClick(item.id)} />
            </Tooltip> )}
    </StyledGrid>
);
