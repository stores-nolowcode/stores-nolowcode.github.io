export const getHeader = () => {
    return /* html */ `
        <header>
            <h1>My Website</h1>
            <nav>
                <a href="/" data-link>Home</a>
                <a href="/about" data-link>About</a>
                <a href="/contact" data-link>Contact</a>
                <a href="/login" data-link>Login</a>
            </nav>
        </header>
    `;
};
