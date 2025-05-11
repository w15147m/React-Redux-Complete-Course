const BtnContainer = () => {
    const BtnNames = [
        'C', '(', ')', '÷',
        '7', '8', '9', '×',
        '4', '5', '6', '−',
        '1', '2', '3', '+',
        '00', '0', '.', '='
    ];
    return (
        <div id='buttons-container' className="row g-2">
            {BtnNames.map((btn, index) => {
                return (
                    <div key={index} className="col-3">
                        <button className={` w-100 btn btn-${btn === '=' ? 'success' : btn === 'C' || btn === '(' || btn === ')' ? 'secondary' : btn === '+' || btn === '−' || btn === '×' || btn === '÷' ? 'danger' : 'light'}`}>
                            {btn}
                        </button>
                    </div>
                );
            }
            )}

        </div>
    );
}

export default BtnContainer;