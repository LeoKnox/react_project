import { useState, useEffect } from 'react';

function List() {
    const data = [
        {name: "entry", description: "entance", width:5, height:5},
        {name: "second", description: "next", width:6, height:6},
        {name: "third", description: "after that", width:7, height:7}
    ];
    const [rooms, setRooms] = useState(data);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleWidth = (e) => {
        setWidth(e.target.value);
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

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
                <td><input type="text" value={name} onChange={handleName} /></td>
                <td><input type="text" value={description} onChange={handleDescription} /></td>
                <td><input type="number" value={width} onChange={handleWidth} /></td>
                <td><input type="number" value={height} onChange={handleHeight} /></td>
                <td><button>Create</button></td>
            </tr>
            </table>
        </>
    )
}

export default List;