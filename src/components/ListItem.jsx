const ListItem = ({ item }) => {
    return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td className="d-flex justify-content-center gap-1">
            <button className="btn btn-info text-white">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger text-white">
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </td>
    </tr>
}
export default ListItem; 