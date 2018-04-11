import * as React from 'react';
import classnames from 'classnames';
import { isEqual } from 'lodash';

// Types
import { Props, State } from './Types';

// Styles
import './Exapnder.css';

class Expander extends React.Component<Props, State> {
    refElement: HTMLDivElement;
    constructor(props: Props) {
        super(props);

        this.collapse = this.collapse.bind(this);
        this.expand = this.expand.bind(this);
        this.handleChildrenRef = this.handleChildrenRef.bind(this);
        this.checkChildrenHeight = this.checkChildrenHeight.bind(this); 

        this.state = {
            expanded: true,
            collapsible: false,
            prevChildrenProps: Object.assign({}, this.props.children.props)
        };
    }

    collapse (e: React.SyntheticEvent<EventTarget>) {
        e.preventDefault();
        this.setState({expanded: false});
    }

    expand (e: React.SyntheticEvent<EventTarget>) {
        e.preventDefault();
        this.setState({expanded: true});
    }

    componentDidUpdate () {
        if (!isEqual(this.props.children.props, this.state.prevChildrenProps)) {
            this.checkChildrenHeight();
            this.setState({prevChildrenProps: this.props.children.props});
        }
    }

    componentDidMount() {
        this.checkChildrenHeight();
    }

    checkChildrenHeight() {
        const bounds = this.refElement.getBoundingClientRect();
        if (bounds.height > parseInt(this.props.collapsedHeight, 10)) {
            this.setState({
                expanded: false,
                collapsible: true
            });
        }
    }

    handleChildrenRef (element: HTMLDivElement | null) {
        if (element) {
            this.refElement = element;            
        }
    }

    render() {
        const {children} = this.props;
        if (!children) {
            return null;
        }

        const divStyle = {
            maxHeight: '100%',
        };

        // Collapsed
        if (!this.state.expanded) {
            Object.assign(divStyle, {
                maxHeight: this.props.collapsedHeight + 'px',
                overflow: 'hidden'
            });
        }

        const classNames = classnames(
            'Expander__wrapper', {
            [this.props.collapsedClass]: !this.state.expanded,
            [this.props.expandedClass]: !!this.state.expanded
        });

        return (
            <div className="Expander">
                <div className={classNames} ref={this.handleChildrenRef} style={divStyle}>
                    {children}
                </div>

                {this.state.collapsible ?
                    (this.state.expanded ?
                    <a
                        href="#"
                        onClick={this.collapse}
                        className="Expander__controls collapse"
                    >
                        show less
                    </a> :
                    <a
                        href="#"
                        onClick={this.expand}
                        className="Expander__controls expand"
                    >
                        show more
                    </a>) :
                    null
                }
            </div>
        );
    }
}

export default Expander;