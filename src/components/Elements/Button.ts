import styled from 'styled-components';

import { buttonBg } from '../../utils/helper';
import { ButtonProps } from "../../Interfaces/elements";

export const Button = styled.button<ButtonProps>`
    background-color: ${buttonBg};
    color: ${({ type }) => (type === "transparent") ? "var(--text-color)" : "var(--card-bg)"} ;
    width: inherit;
    padding: 12px;
    font-size: 16px;
    border-radius: 2px;
    text-align: center;
    transition: all 0.6s;

    &>a{
        color: #fff !important;
    }
    
    &:hover{
        
    }
`;