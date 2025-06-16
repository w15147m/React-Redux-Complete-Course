function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0  bg-body-tertiary" style={{ width: "280px" }}>
            <a href="/" style={{ height:"41px" }} className="d-flex border-bottom w-100  align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-center w-100">Sidebar</span>
            </a>
            <ul className="nav px-3 nav-pills flex-column mb-auto">
                <li className="nav-item mt-3">
                    <a href="/home" className="nav-link active" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#home"></use>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <button type="button" className="nav-link link-body-emphasis" style={{ background: "none", border: "none", padding: 0, textAlign: "left" }}>
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#speedometer2"></use>
                        </svg>
                        Dashboard
                    </button>
                </li>
                <li>
                    <button type="button" className="nav-link link-body-emphasis" style={{ background: "none", border: "none", padding: 0, textAlign: "left" }}>
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#table"></use>
                        </svg>
                        Orders
                    </button>
                </li>
                <li>
                    <button type="button" className="nav-link link-body-emphasis" style={{ background: "none", border: "none", padding: 0, textAlign: "left" }}>
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#grid"></use>
                        </svg>
                        Products
                    </button>
                </li>
                <li>
                    <button type="button" className="nav-link link-body-emphasis" style={{ background: "none", border: "none", padding: 0, textAlign: "left" }}>
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#people-circle"></use>
                        </svg>
                        Customers
                    </button>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <button type="button" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "none", border: "none", padding: 0 }}>
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </button>
                <ul className="dropdown-menu text-small shadow">
                    <li><button type="button" className="dropdown-item">New project...</button></li>
                    <li><button type="button" className="dropdown-item">Settings</button></li>
                    <li><button type="button" className="dropdown-item">Profile</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button type="button" className="dropdown-item">Sign out</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
