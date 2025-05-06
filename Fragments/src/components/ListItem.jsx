
const ListItem= ({ListItems}) => {
    return (
        <>
        {ListItems.map((item) => (
            <li key={item.id} className="list-group-item">
                {item.name}
            </li>
        ))}
        </>
    );
}



export default ListItem;      