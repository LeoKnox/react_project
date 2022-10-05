
function List() {
    const data = [
        {name: "entry", description: "entance", width:5, height:5},
        {name: "second", description: "next", width:6, height:6},
        {name: "third", description: "after that", width:7, height:7}
    ];

    return(
        <>
            <h2>Characters</h2>
            <table>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>width</th>
                    <th>height</th>
                </tr>
            {data.map((d) => (
                <tr>
                    <td>{d.name}</td>
                    <td>{d.description}</td>
                    <td>{d.width}</td>
                    <td>{d.height}</td>
                </tr>
            ))}
            </table>
        </>
    )
}

export default List;