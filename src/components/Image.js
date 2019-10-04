import styled from 'styled-components';

export const Image = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    background: url(${({src}) => src}) no-repeat;
    background-position: center;
    background-size: cover;
`;

