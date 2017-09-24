import './Header.css';
import * as React from 'react';
import Input from '../Input';

type Logo = {
    src: string;
    alt: string;
  };
  
interface Props {
    logo: Logo;
    linkHome: string;
    handleSerachKeywordChange: (event: React.FormEvent<HTMLInputElement>) => void;
    searchKeyword: string;
}

const Header = ({
    logo,
    handleSerachKeywordChange,
    linkHome,
    searchKeyword
}: Props) => {

const inputProps = {
    required: true,
    onChange: handleSerachKeywordChange,
    placeholder: 'Search video..',
};

return (
    <div className="Header">
        <div className="Component__container">
            <a
                href={linkHome}
                className="Header__Link"
            >
                <img
                    className="Header__logo"
                    src={logo.src}
                    alt={logo.alt}
                />
            </a>
            <div className="Header__search-input">
                <Input {...inputProps} />
            </div>
        </div>
    </div>
);
};

export default Header;