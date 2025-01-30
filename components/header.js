export const getHeader = () => {
    return /* html */ `
        <header>
            <h1>My Website</h1>
            <nav>
                <a href="/" data-link>Home</a>
                <a href="/pages/about" data-link>About</a>
                <a href="/pages/contact" data-link>Contact</a>
                <a href="/pages/login" data-link>Login</a>
            </nav>
        </header>
    `;
};
