import * as React from 'react';
import { get, omit } from 'lodash';

import { loadChannelById } from '../libs/youtubeHelper.js';

interface Props {
    loadChannel?: Function;
    channelId?: string;
    channel?: GoogleApiYouTubeChannelResource;
}

interface State {
    channel?: GoogleApiYouTubeChannelResource;
}

const provideChannelData = (Component: React.ComponentClass<Props>) => {
  class ProductProvider extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.getChannelData = this.getChannelData.bind(this);

        this.state = {
            channel: undefined
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.channelId !== this.props.channelId) {
            this.getChannelData(get(this.props, 'channelId'));            
        }
    }

    componentDidMount() {
        this.getChannelData(get(this.props, 'channelId'));        
    }

    getChannelData(channelId: string) {
        if (channelId) {
            loadChannelById(this.props.channelId)(
                (channelData: GoogleApiYouTubeChannelResource) =>
                    this.setState({channel: channelData}));
        }    
    }

    render() {
      const props = omit(this.props, ['loadChannel']);
      return <Component {...props} channel={this.state.channel} />;
    }
  }

  return ProductProvider;
};

export default provideChannelData;
