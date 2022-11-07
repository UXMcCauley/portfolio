import React from 'react';
import styles from "../styles/Header.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

function Header(props) {

    const router = useRouter()

    const links = [
        {title: "About", href: "/", alt: "Home page"},
        {title: "Recent Work", href: "/work", alt: "Listing of work"},
        {title: "Contact", href: "/contact", alt: "Contact details for Andrew McCauley"}
    ]

    return (
        <div className={styles.container}>
            <div className={styles.name}>Andrew J. McCauley</div>
            <div className={styles.linksContainer}>
                {
                    links.map(link => (
                        <div className={`${styles.link} ${router.pathname === link.href ? styles.active : null}`}><Link alt={link.alt} href={link.href}>{link.title}</Link></div>
                    ))
                }
            </div>

        </div>
    );
}

export default Header;
