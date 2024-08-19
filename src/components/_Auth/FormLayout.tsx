import { ReactNode } from "react"

type FormLayoutProps = {
// title: string
children: ReactNode
}

export function FormLayout({children}: FormLayoutProps){
    return(
        <>
        {/* <h2 className=" text-center m-0 mb-8">{title}</h2> */}
        <div className=" grid gap-4 justify-start grid-cols-1">{children}</div>
        </>
    )

}