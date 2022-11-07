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
        <div className={"text-center"}>
            <div className={" bg-gradient-to-r from-purple-600 to-blue-600 w-full text-white font-light p-4 text-2xl uppercase"}>
                Andrew J. McCauley
            </div>
            <div className={"flex justify-center"}>
                {
                    links.map(link => (
                        <div key={link.title} className={`p-4 cursor-pointer ${router.pathname === link.href ? "border-b border-b-purple-700" : null}`}>
                            <Link alt={link.alt} href={link.href}>
                                {link.title}
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Header;
