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
                    Books
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Courses
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Webinars
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href=""
                    >
                    Blog
                    </a>
                </li>
                </ul>
                {/* <button className="ghost-button">
                Subscribe
                </button> */}
            </nav>

            </header>
)};