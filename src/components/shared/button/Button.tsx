import style from './Button.module.css';

interface ButtonProps {
    event: 'click' | 'submit'
    text: string
    style: 'primary' | 'secondary'
    handler: () => void;
}
export default function Button(props: ButtonProps) {
    const styles = [style['button'], style[props.style]];

    if (props.event === 'submit') {
        return <button formAction={props.handler} className={styles.join(' ')}>{props.text}</button>
    }

    return <button onClick={props.handler} className={styles.join(' ')}>{props.text}</button>
}