const TableHeader = ({ cars }) => {
    return (
        <thead>
            <th scope="col">#</th>
            {
                Object.entries(cars[0]).map((carData) =>
                    <tr>
                        <th scope="col">{carData[0]}</th>
                    </tr>
                )
            }
        </thead>
    )
}

export default TableHeader;