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

    useEffect(() => {
        console.log("))))"+ JSON.stringify(rooms));
    }, [rooms]);

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
    
    function createRoom() {
        let newRoom = rooms;
        newRoom.push({name, description, width, height});
        console.log("****"+JSON.stringify(newRoom));
        setRooms(newRoom);
        console.log("!!!!"+JSON.stringify(rooms));
        //setRooms([...rooms, (name, description, width, height)]);
    }

    function updateRoom(roomIndex) {
        console.log("---"+roomIndex);
    }

    function deleteRoom(deleteIndex) {
        let deletedArray = rooms.filter(room => room.name !== deleteIndex);
        setRooms(deletedArray);
        console.log("&&&&"+JSON.stringify(deletedArray));
    }

    return(
        <>
            <h2>Characters</h2>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>width</th>
                    <th>height</th>
                </tr>
            {rooms.map((room, index) => (
                <tr key={index}>
                    <td>{room.name}</td>
                    <td>{room.description}</td>
                    <td>{room.width}</td>
                    <td>{room.height}</td>
                    <td><button onClick={() => updateRoom(room.name)}>Edit</button></td><td><button onClick={() => deleteRoom(room.name)}>Delete</button></td>
                </tr>
            ))}
            <tr>
                <td><input type="text" value={name} onChange={handleName} /></td>
                <td><input type="text" value={description} onChange={handleDescription} /></td>
                <td><input type="number" value={width} onChange={handleWidth} /></td>
                <td><input type="number" value={height} onChange={handleHeight} /></td>
                <td><button onClick={() => createRoom()}>Create</button></td>
            </tr>
            </tbody>
        </>
    )
}

export default List;