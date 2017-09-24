import './Input.css';
import * as React from 'react';
import * as classnames from 'classnames';

interface Props {
    type?: string;
    cssClass?: string | undefined;
    id?: string;
    label?: string;
    required?: boolean;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    const { cssClass } = props;    
    const classNames = classnames('Input', cssClass);

    return (
        <div className={classNames}>
            <label htmlFor={props.id} className="Input__label">
                {props.label}
            </label>
            <input
                {...props}
                className="Input__input"
                aria-required={props.required}
            />
        </div>
    );
};

export default Input;