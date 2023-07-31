import { FC, ReactNode } from "react";

import Head from "next/head";
import { NavBar } from "../components/NavBar/NavBar";
import { Inter } from 'next/font/google';
import styles from './MainLayout.module.scss';

const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps{
    children: ReactNode,
    className?: string|undefined,
    pageName?:string|undefined
}

export const MainLayout: FC<MainLayoutProps> = ({ children, className = '', pageName = '' }) => {
    return (
        <>

            <main className={`${className ? className : ''} ${styles['main-layout']} ${inter.className}`}>
                <Head>
                    <title>Test Project - { pageName }</title>
                    <meta name="description" content={`Page description`} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavBar />
                {
                    children
                }
            </main>

        </>
    )
}