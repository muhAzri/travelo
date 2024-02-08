import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav className="flex items-center gap-5">
            <NavItem label="Beranda" href="/" />
            <NavItem label="Kontak" href="/contact" />
            <NavItem label="Paket" href="/package" />
            <NavItem label="Testminonial" href="/testimonial" />
        </nav>
    )
}

export default Nav;