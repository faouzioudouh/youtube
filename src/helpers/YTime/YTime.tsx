import * as React from 'react';
import moment from 'moment';

interface Props {
    format: string;
    date: string;
}

const YTime = ({date, format}: Props) => {
    if (!date) {
        return null;
    }

    const outputTime = moment(date).format(format);
    return (
        <time className="YTime">
            {outputTime}
        </time>
    );
};

export default YTime;