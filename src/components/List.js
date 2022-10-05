
function List() {
    const data = [
        {name: "entry", description: "entance", width:5, height:5},
        {name: "second", description: "next", width:6, height:6},
        {name: "third", description: "after that", width:7, height:7}
    ];

    return(
        <>
            <h2>Characters</h2>
            <h3>{data[0].name}</h3>
        </>
    )
}

export default List;