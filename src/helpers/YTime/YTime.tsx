import * as React from 'react';
import moment from 'moment';

interface Props {
    format: string;
    date: string;
}

const YTime = ({date, format}: Props) => {
    let outputTime;
    if (!date) {
        return null;
    }

    switch(format) {
        case 'fromNow':
            outputTime = moment(date).fromNow();
            break;
        default:
            outputTime = moment(date).format(format);
    }

    return (
        <time className="YTime">
            {outputTime}
        </time>
    );
};

export default YTime;