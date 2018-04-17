import * as React from 'react';
import * as classnames from 'classnames';

export interface IconProps {
    icon: string;
    className: number;
  }

const Icon: React.SFC<IconProps> = ({ icon, className }: IconProps) => {
    const IconClassName = classnames('yt-icon', { [`yt-icon--${icon}`]: Boolean(icon) }, className);
    return <i aria-hidden="true" className={IconClassName} />;
};

export default Icon;