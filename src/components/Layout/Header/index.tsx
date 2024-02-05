import Image from "next/image"
import { headerLogo } from '@assets/images'
import Container from "@components/Container"
import Search from "@components/Layout/Header/Search"

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src={headerLogo}
                            alt="Travelo Logo"
                            height={"48"}
                            width={"182"}
                        />

                        <Search />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header