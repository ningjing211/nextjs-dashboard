import '@/app/ui/article.css';
import Script from 'next/script';

export default function Article() {
    return (
        <div>
            <nav>
                <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-sm-8">
                    <p id="logo">
                        韓國瑜面紙擦拭計畫
                    </p>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <ul>
                        <li>
                        <a href="#about">
                            About
                        </a>
                        </li>
                        <li>
                        <a href="#blog">
                            Blog
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
            <header>
                <div className="container">
                <section className="grid intro">
                    <div className="column-xs-12 column-md-4">
                    <div className="info">
                        <h1>
                        Alright Han
                        </h1>
                        <p className="lead">
                        Lorem ipsum dolor amet palo santo polaroid readymade coffee.
                        </p>
                        <a
                        className="btn fill"
                        href="#"
                        >
                        Learn more
                        </a>
                    </div>
                    </div>
                    <div className="column-xs-12 column-md-8">
                    <div className="image-holder">
                        <div
                        className="image-block"
                        data-aos="reveal-bottom"
                        />
                        <img
                        className="main-img"
                        src="https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                    </div>
                </section>
                </div>
            </header>
            <main>
                <div className="container">
                <section
                    className="grid"
                    id="about"
                >
                    <div className="column-xs-12 column-md-6">
                    <div className="image-holder">
                        <div
                        className="image-block"
                        data-aos="reveal-bottom"
                        />
                        <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    </div>
                    <div className="column-xs-12 column-md-6">
                    <h2>
                        Model, Actress, & Business Woman.
                    </h2>
                    <p>
                        Photo booth cold-pressed air plant iceland actually single-origin coffee. Tacos kitsch tattooed, trust fund vaporware woke letterpress messenger bag photo booth viral. Vice 8-bit live-edge, iceland scenester next level affogato heirloom banh mi fingerstache you probably haven't heard of them schlitz fashion axe pok pok helvetica. Knausgaard post-ironic ramps mustache lo-fi. Knausgaard subway tile vegan banh mi hoodie VHS wayfarers direct trade williamsburg raclette schlitz enamel pin.
                    </p>
                    <p>
                        Pug venmo tattooed, fanny pack roof party neutra humblebrag put a bird on it glossier semiotics vexillologist cold-pressed. Austin +1 kale chips authentic bespoke sustainable wayfarers normcore palo santo. Tacos, pok pok affogato organic cronut tbh ennui craft beer. Chia fanny pack bicycle rights fashion axe, pickled post-ironic twee jean shorts cold-pressed leggings.
                    </p>
                    </div>
                </section>
                <section
                    className="grid"
                    id="blog"
                >
                    <div className="column-xs-12 text-center">
                    <h2>
                        Recent Blog Posts
                    </h2>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Fashion
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Life
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Travel
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 text-center">
                    <a
                        className="btn outline"
                        href="#"
                    >
                        Read more
                    </a>
                    </div>
                </section>
                </div>
            </main>
            <footer>
                <div className="container">
                <section className="grid">
                    <div className="column-xs-12">
                    <p className="copyright">
                        © Copyright 2024 Ever Changing
                    </p>
                    </div>
                </section>
                </div>
            </footer>
            </div>
)};