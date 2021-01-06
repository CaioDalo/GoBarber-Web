import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
    background-color: #ff9000;
    color: #321e38;
    height: 56px;
    border-radius: 10px;
    border: none;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#ff9000')};
    }
`
