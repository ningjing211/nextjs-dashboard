import '@/app/ui/ideas/header.css';

export default function Header() {
    return (
        <header>
            <nav className="header-nav container flex-container">
                <h1 className="logo">
                <a
                    className="logo-link"
                    href="#"
                >
                    萬萬想不到
                </a>
                </h1>
                <ul className="header-menu flex-container">
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Philosophy
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Core Value
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Origin
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Vision
                    </a>
                </li>
                </ul>
                {/* <button className="ghost-button">
                Subscribe
                </button> */}
            </nav>

            </header>
)};