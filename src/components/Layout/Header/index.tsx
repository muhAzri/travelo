import Image from "next/image";
import { headerLogo } from '@assets/images';
import Container from "@components/Container";
import Search from "@components/Layout/Header/Search";
import Nav from "./Nav";
import Button from "@components/Buttons/Button";

const Header = () => {
    return (
        <header className="bg-white shadow-lg p-4">
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
                    <div className="flex gap-5">
                        <Nav />
                        <Button className="w-[190px]" onClick={() => { }}>
                            Masuk
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
