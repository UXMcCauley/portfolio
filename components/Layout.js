import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={""}>
                {children}
            </div>

        </div>
    )
}
