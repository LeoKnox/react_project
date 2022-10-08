import { useState, useEffect } from 'react';

function List() {
    const data = [
        {name: "entry", description: "entance", width:5, height:5},
        {name: "second", description: "next", width:6, height:6},
        {name: "third", description: "after that", width:7, height:7}
    ];
    const [rooms, setRooms] = useState(data);
    const [room, setRoom] = useState({"name":"", "description":"","width":0,"height":0});
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

    const deleteRoom = (deleteIndex, e) => {
        console.log(deleteIndex)
        console.log("***"+e);
    }
    
    const createRoom = (e) => {
        //data = rooms;
        //data.push({name, description, width, height});
        //console.log("****"+JSON.stringify(data));
        //setRooms(data);
        setRooms([...rooms, (name, description, width, height)]);
        console.log("!!!!!"+JSON.stringify(rooms));
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
            {rooms.map((room, index) => (
                <tr>
                    <td>{room.name}</td>
                    <td>{room.description}</td>
                    <td>{room.width}</td>
                    <td>{room.height}</td>
                    <td><button>Edit</button></td><td><button onClick={deleteRoom}>Delete</button></td>
                </tr>
            ))}
            <tr>
                <td><input type="text" value={name} onChange={handleName} /></td>
                <td><input type="text" value={description} onChange={handleDescription} /></td>
                <td><input type="number" value={width} onChange={handleWidth} /></td>
                <td><input type="number" value={height} onChange={handleHeight} /></td>
                <td><button onClick={createRoom}>Create</button></td>
            </tr>
            </table>
        </>
    )
}

export default List;