import styled from 'styled-components';
import { CardProps, FlexyWrapperProps } from '../Interfaces/components';
import { flexyCss } from '../utils/helper';

export const Wrapper = styled.section<CardProps>`
    display: inline-block;
    padding: 32px;
    border-radius: 8px;
    background-color: #f4f4f4;
    max-width: ${({ boxtype = "" }) => (boxtype === 'login' ? '520px' : 'unset')};
    width: 100%;

    @media(max-width: 1400px){
        padding: 30px;
    }
    @media(max-width: 1200px){
        padding: 28px;
    }
    @media(max-width: 1024px){
        padding: 24px;
    }
    @media(max-width: 768px){
        padding: 20px;
    }
    @media(max-width: 460px){
        padding: 18px;
    }
    @media(max-width: 320px){
        padding: 14px;
    }
`;

export const FieldWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: center;

    &:has(input){
        padding: 12px;
        border: 1px solid var(--input-border);
        border-radius: 2px;
    }

    & > input{
        width: 100%;
        border: none;
    }
`;

export const FlexyWrapper = styled.div<FlexyWrapperProps>`
    display: flex;
    align-items: ${({ direction = "row" }) => direction === "row" ? "center" : "flex-start"};
    justify-content: ${flexyCss};
    gap: ${({ gap }) => `${gap}px`};
    flex-direction: ${({ direction = "row" }) => direction};
`;

export const HeaderWrapper = styled.div`
    position: relative;
    background-color: var(--header-bg);
    color: var(--card-bg);
    text-transform: capitalize;
    text-align: end;
    padding: 18px 0;

    & div {
        justify-content: right;
    }
`;

export const Section = styled.section`
    position: relative;
    padding: 0 72px;
    
    @media(max-width: 1400px){
        padding: 0 64px;
    }
    @media(max-width: 1200px){
        padding: 0 56px;
    }
    @media(max-width: 1024px){
        padding: 0 42px;
    }
    @media(max-width: 768px){
        padding: 0 32px;
    }
    @media(max-width: 460px){
        padding: 0 24px;
    }
    @media(max-width: 320px){
        padding: 0 12px;
    }
`;

export const TableWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: auto;

    table{
        width: 100%;
        border-collapse: collapse;
    }
        
    table *{
        font-size: 14px;
    }
    
    table thead{
        background-color: var(--table-head-overlay)
    }
            
    table th:first-child{
        width:  25%;
    }

    table td:first-child{
        text-align: center;
    }
        
    table th, table td{
        padding: 18px;
        vertical-align: middle;
    }
        
    table tbody tr{
        transition: all 0.6s;
    }

    table tbody tr:hover{
        cursor: pointer;
        background-color: var(--table-head-overlay);
    }

    table th{
        font-weight: 500;
        opacity: 0.8;
        text-align:left;
    }

    table img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
    }

    table a{
        color: var(--primary-color);
    }
`
