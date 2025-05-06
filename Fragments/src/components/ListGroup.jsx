import ListItem from "./ListItem";
function random({ ListItems }) {
    return (
        <ul className="list-group">
                <ListItem  ListItems={ListItems} />
        </ul>
    )
}
export default random;
