import * as React from 'react';
import * as classnames from 'classnames';
import icons from '../../icons';

export interface IconProps {
    iconName: string;
    className: string;
    title?: string;
    width?: string;
    height?: string;
  }

const Icon: React.SFC<IconProps> = ({ iconName, className, width, height }: IconProps) => {
    const Icon = icons[iconName];
    const IconClassName = classnames('yt-icon', [`yt-icon--${iconName}`], className);
    return <Icon aria-hidden="true" className={IconClassName} style={{width, height}}/>;
};

Icon.defaultProps = {
    width: '20',
    height: '20',
}

export default Icon;