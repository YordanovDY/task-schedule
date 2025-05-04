import { Category } from '../../../types/Task';
import { getStyleByCategory } from '../../../utils/styleUtil';
import style from './Button.module.css';

interface ButtonProps {
    event: 'click' | 'submit'
    text: string
    style: 'primary' | 'secondary' | 'optimistic' | Category
    handler: () => void;
}
export default function Button(props: ButtonProps) {
    let btnStyle = style[props.style];

    if (props.style !== 'primary' && props.style !== 'secondary' && props.style !== 'optimistic') {
        const styleName = getStyleByCategory(props.style);
        btnStyle = style[styleName];
    }

    const styles = [style['button'], btnStyle];

    if (props.event === 'submit') {
        return <button formAction={props.handler} className={styles.join(' ')}>{props.text}</button>
    }

    return <button onClick={props.handler} className={styles.join(' ')}>{props.text}</button>
}