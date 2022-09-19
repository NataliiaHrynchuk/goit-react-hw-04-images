import { RotatingLines } from 'react-loader-spinner';
import * as SC from './Loader.style';

export const Loader = () => {
    return <SC.Loader>
        <RotatingLines
            animationDuration="0.75"
            strokeWidth="5"
            width="96"
            visible={true}
            strokeColor="grey"
        />
    </SC.Loader>
}