function ErrorPage(IsList) {
    return (
        IsList ? (
         null
        ) :  <div className="error">
        <p>List not found</p>
    </div>
    );
}
export default ErrorPage;