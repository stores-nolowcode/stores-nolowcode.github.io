export const getHeader = () => {
    return /* html */ `
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My Website</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="/">🏠 Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/about/">ℹ️ About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/services/">🛠 Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/contact/">📞 Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
};
