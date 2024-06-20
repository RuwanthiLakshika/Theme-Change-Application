import React from 'react';
import { ThemeContext } from '../theme';

function Header() {

    const theme = React.useContext(ThemeContext);

    return (
        <header>
            <p style={{color:theme.foreground}}>Welcome to the Theme Change Application</p>
        </header>
    );
}

export default Header;