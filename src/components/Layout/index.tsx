import { ReactNode } from 'react'
import Header from "./Header"

type Props = {
    children: ReactNode
}


const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <footer></footer>
        </>
    )
}

export default Layout