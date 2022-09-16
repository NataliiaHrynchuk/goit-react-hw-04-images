import styled from '@emotion/styled';

export const SearchFormBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    border: none;
    :hover {
        opacity: 1;
    }
`;
// export const SearchFormBtnLabel = styled.span`
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     padding: 0;
//     // overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     white-space: nowrap;
//     clip-path: inset(50%);
//     border: 0;
//     `;
