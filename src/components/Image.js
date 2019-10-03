import styled from 'styled-components';

export const Image = styled.div`
    position: relative;
    width: ${({detailsView}) => detailsView ? '400px' : '220px'};
    height: ${({detailsView}) => detailsView ? '400px' : '220px'};
    background: url(${({src}) => src}) no-repeat;
    background-position: center;
    background-size: cover;
    margin: 5px;
`;

