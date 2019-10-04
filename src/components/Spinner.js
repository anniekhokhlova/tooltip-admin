import styled, {keyframes} from 'styled-components';

const load = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
   -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    color: #521751;
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    border-radius: 50%;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    
    &:before, &:after {
        border-radius: 50%;
        position: absolute;
        content: '';
    } 
    
    &:before {
        width: 5.2em;
        height: 10.2em;
        background: #fff;
        border-radius: 10.2em 0 0 10.2em;
        top: -0.1em;
        left: -0.1em;
        -webkit-transform-origin: 5.2em 5.1em;
        transform-origin: 5.2em 5.1em;
        -webkit-animation: ${load} 2s infinite ease 1.5s;
        animation: ${load} 2s infinite ease 1.5s;
    }
    
    &:after {
        width: 5.2em;
        height: 10.2em;
        background: #fff;
        border-radius: 0 10.2em 10.2em 0;
        top: -0.1em;
        left: 5.1em;
        -webkit-transform-origin: 0px 5.1em;
        transform-origin: 0px 5.1em;
        -webkit-animation: ${load} 2s infinite ease;
        animation: ${load} 2s infinite ease;
    }
`;
