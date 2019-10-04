import React from 'react';
import { TooltipText, TooltipWrapper } from './Styled'

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
