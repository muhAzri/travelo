import Link from "next/link";
import { memo } from "react";

type Props = {
    href: string
    label: string
}

const NavItem = ({ label, href = "/" }: Props) => {
    return (
        <Link href={href} className="text-heading-4 text-gray-70 font-label font-bold">
            {label}
        </Link>
    )
}

export default memo(NavItem);