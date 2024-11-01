import { useEffect, useState } from 'react'
import NavbarMobile from './nav-mobile/NavbarMobile';
import NavbarDesktop from './nav-desktop/NavbarDesktop';

export default function Navbar() {

    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            {screenWidth > 900 ? <NavbarDesktop /> : <NavbarMobile />}
        </>
    );
}