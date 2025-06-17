function Sidebar({selectedPage, setSelectedPage}) {
    const onClickHendler = (e) => {
               setSelectedPage(e.target.value);
    };
    return (
        <div className="d-flex flex-column flex-shrink-0  bg-body-tertiary" style={{ width: "200px" }}>
            <a href="/" style={{ height:"41px" }} className="d-flex border-bottom w-100  align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-center w-100">Sidebar</span>
            </a>
            <ul className="nav px-3 nav-pills flex-column mb-auto">
              
               <li>
                    <button type="button" value='Home' onClick={onClickHendler} className={`nav-link mt-3 w-100 text ${selectedPage == 'Home' ? 'active' : 'text-black' } `} >
                        Home
                    </button>
                </li>
               <li>
                    <button type="button" value='Posts' onClick={onClickHendler} className={`nav-link mt-3 w-100 text ${selectedPage != 'Home' ? 'active' : 'text-black' } `} >
                        Posts
                    </button>
                </li>
               
            </ul>
            <div className="dropdown p-3">
                <button type="button" className="d-flex align-items-center link-body-emphasis text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "none", border: "none", padding: 0 }}>
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Profile</strong>
                </button>
             
            </div>
        </div>
    );
}

export default Sidebar;
