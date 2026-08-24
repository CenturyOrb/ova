'use client'
import styles from "@/app/ui/nav.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NavLinks = () => {
    const pathname = usePathname();
    console.log(pathname);

    return(
        <div className={styles.nav_links}>
            <Link href="/" className={clsx({
                [styles.active]: pathname === "/",
            })}>Home</Link>
            <Link href="/about">About</Link>
            <Link href="contact">Contact</Link>
        </div>
    );
}

export default NavLinks;
