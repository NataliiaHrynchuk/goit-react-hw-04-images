import * as SC from './Button.style';

export const Button = ({ children, onClick }) => {
    return <SC.Button
        type="button"
        onClick={onClick}
    >{children}</SC.Button>
}