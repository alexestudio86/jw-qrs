import { Navbar } from "./Navbar";

export function Header() {
    return (
        <>
            <Navbar />
            <header className="white p-4">
                <h1 className="jumbo">{document.title}</h1>
            </header>
        </>
    )
}