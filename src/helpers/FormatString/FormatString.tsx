import * as React from 'react';
import anchorme from 'anchorme';

interface Props {
    text: string;
    tagName: string;
}

interface State {
    output: string;
}

const formatString = (text: string): string => {
    const output = anchorme(text);
    return output.replace(/(?:\r\n|\r|\n)/g, '<br />');
};

class FormatString extends React.Component<Props, State> {
    output: string;
    constructor(props: Props) {
        super(props);
        this.state = {
            output: formatString(props.text)
        };
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return nextProps.text !== this.props.text ||
            nextState.output !== this.state.output;
    }

    componentDidUpdate() {
        this.setState({output: formatString(this.props.text)});
    }

    render() {
        return React.createElement(this.props.tagName, {
            dangerouslySetInnerHTML: {
                __html: this.state.output
            }
        });
    }
}

export default FormatString;