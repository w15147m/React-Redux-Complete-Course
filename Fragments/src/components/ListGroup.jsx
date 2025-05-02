function random({ ListItems }) {
    return (
        <ul className="list-group">
            {ListItems.map((item) => (
                <li key={item.id} className="list-group-item">
                    {item.name}
                </li>
            ))}

        </ul>
    )
}
export default random;
