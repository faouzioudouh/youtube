import * as React from 'react';
import anchorme from 'anchorme';

interface Props {
    text: string;
    tagName: string;
}

class FormatString extends React.Component<Props> {
    output: string;
    constructor(props: Props) {
        super(props);

        this.output = anchorme(props.text);
        this.output = this.output.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }

    render() {
        return React.createElement(this.props.tagName, {
            dangerouslySetInnerHTML: {
                __html: this.output
            }
        });
    }
}

export default FormatString;