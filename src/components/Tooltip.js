import React from 'react';
import styled, {css} from 'styled-components';

const TooltipTriangle = css`
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    `;

const topTooltipCss = css`
    bottom: calc(100% + 8px);
    right: 0%;
    transform: translateX(-50%);
    
    &::after {
        top: 100%;
        left: 50%;
        border-color: ${({color}) => color} transparent transparent transparent;
    }
`;

const bottomTooltipCss = css`
    top: calc(100% + 8px);
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
    right: calc(100% + 6px);
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
    left: calc(100% + 6px);
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
    'top' : topTooltipCss,
    'bottom' : bottomTooltipCss,
    'left' : leftTooltipCss,
    'right' : rightTooltipCss,
};

const TooltipText = styled.span`
    position: absolute;
    visibility: hidden;
    width: ${({width}) => width};
    background-color: ${({color}) => color};
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.3s;
    
    &::after {
        ${TooltipTriangle}
    }
    
    ${({position}) => TOOLTIP_TRIANGLE_STYLES[position]}
`;

export const TooltipWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    display: 'block';
    
    &:hover > ${TooltipText} {
        visibility: visible;
        opacity: 1;
    }
`;


export const Tooltip = ({
    text,
    position = 'bottom',
    children,
    color = 'red',
    width = '120px'
}) => (
    <TooltipWrapper>
        {children}
        <TooltipText width={width} position={position} color={color}>
            {text}
        </TooltipText>
    </TooltipWrapper>

    );
