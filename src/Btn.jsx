const Btn = () => {
    return (
      <div className="d-flex gap-2  justify-content-center py-5">
        <button className="btn btn-primary rounded-pill px-3" type="button">Primary</button>
        <button className="btn btn-secondary rounded-pill px-3" type="button">Secondary</button>
        <button className="btn btn-success rounded-pill px-3" type="button">Success</button>
        <button className="btn btn-danger rounded-pill px-3" type="button">Danger</button>
        <button className="btn btn-warning rounded-pill px-3" type="button">Warning</button>
        <button className="btn btn-info rounded-pill px-3" type="button">Info</button>
      </div>
    );
  };
  
  export default Btn;