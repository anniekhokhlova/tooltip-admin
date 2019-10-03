import styled from 'styled-components';

export const Image = styled.div`
    position: relative;
    margin: 5px;
    width: ${({detailsView}) => detailsView ? '400px' : '240px'};
    height: ${({detailsView}) => detailsView ? '400px' : '240px'};
    background: url(${({src}) => src}) no-repeat;
    background-position: center;
    background-size: cover;
`;

