

function nav() {
    return (
        <nav className="py-2 bg-body-tertiary border-bottom">
            {" "}
            <div className="container-fluid d-flex flex-wrap">
                {" "}
                <ul className="nav me-auto">
                    {" "}
                    <li className="nav-item">
                    </li>{" "}
                    <li className="nav-item">
                        <button type="button" className="nav-link link-body-emphasis px-2" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                            Home
                        </button>
                    </li>{" "}
                    <li className="nav-item">
                        <button type="button" className="nav-link link-body-emphasis px-2" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                            About
                        </button>
                    </li>{" "}
                </ul>{" "}
                <ul className="nav">
                    {" "}

                    <li className="nav-item ">
                        <button type="button" className="nav-link link-body-emphasis px-2" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                            Sign up
                        </button>
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
        </nav>
    );
}

export default nav;
