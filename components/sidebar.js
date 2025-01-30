export const getSidebar = () => {
    return /* html */ `
        <div class="d-flex flex-column p-3">
            <h4>Menu</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="/">🏠 Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/about/">ℹ️ About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/services/">🛠 Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/contact/">📞 Contact</a>
                </li>
            </ul>
        </div>
    `;
};
