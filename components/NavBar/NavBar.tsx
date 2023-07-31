import { FC } from 'react';
import { ActiveLink } from '@/components/ActiveLink/ActiveLink';
import styles from './Navbar.module.scss';


const navMenuItems = [
    {
        href: '/',
        text: 'Home',
        title: 'Link to home',
        id: 1,
    },
    {
        href: '/about',
        text: 'About',
        title: 'Link to About',
        id: 2,
    },
    {
        href: '/contact',
        text: 'Contact',
        title: 'Link to Contact',
        id: 3,
    },
    {
        href: '/pricing',
        text: 'Pricing',
        title: 'Link to Pricing',
        id: 4,
    },
]

export const NavBar: FC = () => {
    return (
        <>
            <nav className={ styles['nav-container'] }>
                {
                    navMenuItems?.map(({ text, href, id })=> {
                        return <ActiveLink key={id} href={href}>{ text ? text : 'Link text' }</ActiveLink>
                    })
                }
            </nav>

        </>
    )
}

