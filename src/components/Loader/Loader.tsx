import * as React from 'react';
import './Loader.css';

type Props = {
    classnames?: string;
};

const Loader = ({ classnames }: Props) => (
    <div className={`Loader ${classnames}`}>
        <img
            className="Loader__spinner"
            src="http://www.myeurostarscity.com/templates/cadenas/myeurostarscity/imagenes/home/loader.gif"
            alt="Spinner"
            width="30"
            height="30"
        />
    </div>
);

export default Loader;