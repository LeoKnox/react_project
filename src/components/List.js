import { useState, useEffect } from 'react';

function List() {
    const data = [
        {name: "entry", description: "entance", width:5, height:5},
        {name: "second", description: "next", width:6, height:6},
        {name: "third", description: "after that", width:7, height:7}
    ];
    const [rooms, setRooms] = useState(data);

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
            {rooms.map((room) => (
                <tr>
                    <td>{room.name}</td>
                    <td>{room.description}</td>
                    <td>{room.width}</td>
                    <td>{room.height}</td>
                    <td><button>Edit</button></td><td><button>Delete</button></td>
                </tr>
            ))}
            <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><button>Create</button></td>
            </tr>
            </table>
        </>
    )
}

export default List;