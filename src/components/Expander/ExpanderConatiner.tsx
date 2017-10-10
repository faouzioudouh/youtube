import * as React from 'react';
import classnames from 'classnames';

// Types
import { Props, State } from './Types';

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
            collapsible: false
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

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return nextState.expanded !== this.state.expanded;
    }

    componentDidUpdate() {
        this.checkChildrenHeight();            
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
            'Expande__wrapper', {
            [this.props.collapsedClass]: !this.state.expanded,
            [this.props.expandedClass]: !!this.state.expanded
        });

        return (
            <div>
                <div className={classNames} ref={this.handleChildrenRef} style={divStyle}>
                    {children}
                </div>

                {this.state.collapsible ?
                    (this.state.expanded ?
                    <a href="#" onClick={this.collapse} className="Expander__collapse">show less</a> :
                    <a href="#" onClick={this.expand} className="Expander__expand">show more</a>) :
                    null
                }
            </div>
        );
    }
}

export default Expander;