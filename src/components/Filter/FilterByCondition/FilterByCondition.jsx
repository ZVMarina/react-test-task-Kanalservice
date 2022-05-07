import Dropdown from "../../Dropdown/Dropdown";

const FilterByCondition = () => {
    return (
        <Dropdown
            trigger=
            {
                <span>Condition</span>
            }
            list=
            {
                <ul>
                    <li>equally</li>
                    <li>more</li>
                    <li>less</li>
                    <li>contains</li>
                </ul>
            }
        />
    )
}

export default FilterByCondition;