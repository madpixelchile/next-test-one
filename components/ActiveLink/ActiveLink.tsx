import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../NavBar/Navbar.module.scss';

interface ActiveLinkProps{
    href: string,
    children: ReactNode,
    className?:string | undefined,
    style?: string | {} | [] | undefined,
    target?: string | undefined
}

export const ActiveLink: FC<ActiveLinkProps> = ({

    href = '/',
    children = '',
    className = '',
    style = {} ,
    target = '_self'

}) => {

    const router = useRouter();

    const { asPath } = router;

    // console.log(router);

    return (
        <>
            <Link
                href={ href }
                className={ `${ className + ( asPath === href ? styles['active'] : '' ) }` }
                style={ style }
                target={ target }
                // replace
            >{ children ? children : 'Custom active Link' }
            </Link>
        </>
    )
}