import { MainLayout } from "@/layouts/MainLayout"
import { ReactNode } from "react";


interface getLayout {
  page: ReactNode;
}

export default function pricing(){
  return (
    <h1 className={'title'}>Pricing</h1>
  )
}
pricing.getLayout = function getLayout( page: ReactNode ){

    return(
        <MainLayout>
            {
                page
            }
        </MainLayout>
    )

}