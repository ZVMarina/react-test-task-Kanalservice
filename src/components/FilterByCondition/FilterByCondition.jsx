import Dropdown from "../Dropdown/Dropdown";

const FilterByColumn = () => {
    return (
        <Dropdown 
        trigger={
            <span>Filter</span>
        } list={
            <ul>
                <li>name</li>
                <li>distance</li>
                <li>quantity</li>
            </ul>
        } />
    )
}

export default FilterByColumn;