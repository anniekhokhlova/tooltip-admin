import React from 'react';
import styled, {css} from 'styled-components';

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

const TooltipText = styled.span`
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
    
    &::after {
        ${tooltipTriangleCss}
    }
    
    ${({position}) => TOOLTIP_TRIANGLE_STYLES[position]}
`;

const TooltipWrapper = styled.div`
    position: relative;
    cursor: pointer;
    display: 'block';
    
    &:hover > ${TooltipText} {
        visibility: visible;
        opacity: 1;
    }
`;

export const Tooltip = ({
    text,
    position = 'BOTTOM',
    children,
    color = 'red',
    textColor = 'white'
}) => (
    <TooltipWrapper>
        {children}
        <TooltipText position={position} color={color} textColor={textColor}>
            {text}
        </TooltipText>
    </TooltipWrapper>
);
