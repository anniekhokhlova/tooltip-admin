import styled, { css } from 'styled-components';

const tooltipTriangleCss = css`
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
`;

const topTooltipCss = css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 7px 0 0 0;
    
    &::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: ${({color}) => color} transparent transparent transparent;
    }
`;

const bottomTooltipCss = css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 7px 0 0 0;
    
    &::after {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: transparent transparent ${({color}) => color} transparent;
    }
`;

const leftTooltipCss = css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 7px 0 0;
    
    &::after {
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-color: transparent transparent transparent ${({color}) => color};
    }
`;

const rightTooltipCss = css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 0 0 7px;
    
    &::after {
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-color: transparent ${({color}) => color} transparent transparent;
    }
`;

const TOOLTIP_TRIANGLE_STYLES = {
    'TOP' : topTooltipCss,
    'BOTTOM' : bottomTooltipCss,
    'LEFT' : leftTooltipCss,
    'RIGHT' : rightTooltipCss,
};

export const TooltipText = styled.span`
    position: absolute;
    width: fit-content;
    visibility: hidden;
    margin: 2px;
    padding: 10px;
    background-color: ${({color}) => color};
    color: ${({textColor}) => textColor};
    text-align: center;
    border-radius: 6px;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.3s;
    margin: 7px;
    
    &::after {
        ${tooltipTriangleCss}
    }
    
    ${({position}) => TOOLTIP_TRIANGLE_STYLES[position]}
`;

export const TooltipWrapper = styled.div`
    position: relative;
    cursor: pointer;
    display: 'block';
    width: ${({detailsView}) => detailsView ? '60%' : '20%'};
    margin: 5px;
    
    &:hover > ${TooltipText} {
        visibility: visible;
        opacity: 1;
    }
`;
