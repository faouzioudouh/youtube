import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import Header from './Header';
import { searchTextUpdated } from '../../actions/searchText';

type Logo = {
    src: string;
    alt: string;
};

interface Props {
    logo: Logo;
    linkHome: string;
    handleSearchTextChanges: (text: string) => { type: string; text: string; };
}

interface State {
    serachKeyword: string;
}

class HeaderContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleSerachKeywordChange = this.handleSerachKeywordChange.bind(this);
        this.state = {
            serachKeyword: '',
        };
    }

    handleSerachKeywordChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({serachKeyword: e.currentTarget.value}, () => {
            debounce(
                () => {
                    this.props.handleSearchTextChanges(this.state.serachKeyword);            
                },
                1000)();
        });
    }

    render() {
        return (
            <Header
                handleSerachKeywordChange={this.handleSerachKeywordChange}
                {...this.props}
                searchKeyword={this.state.serachKeyword}
            />);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
    handleSearchTextChanges: (text: string) => dispatch(searchTextUpdated(text))
});

export default connect(null, mapDispatchToProps)(HeaderContainer);