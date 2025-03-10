const CurrentTime = () => {
    // let currentTime = 
        let currentTime = new Date().toLocaleTimeString();
    return <div className="">
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{currentTime}</h5>
                  
                </div>
            </div>
        </div>
    </div>
}
export default CurrentTime;