import { MainLayout } from '@/layouts/MainLayout';
import { DarkLayout } from '@/layouts/DarkLayout';
// import { ReactNode } from 'react';

interface getLayout {
    page: JSX.Element; //Es lo mismo que ReactNode y ReactElement
}
export default function about(){
    return (
        <>
            <h1 className={'title'}>About</h1>
        </>
    )
}

about.getLayout = function getLayout( page: JSX.Element ){
    return(
        <MainLayout pageName={'About'}>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}