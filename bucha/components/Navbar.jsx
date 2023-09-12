import { useEffect, useState } from 'react'
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {

    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    return (
        <>
            {screenWidth > 945 ? <NavbarDesktop /> : <NavbarMobile />}
        </>
    );
}