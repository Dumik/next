
import React from 'react';
import { Dialog, LinkElem } from './Dialogs.styled'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <LinkElem to={"/dialogs/" + props.id}>{props.name}</LinkElem>
        </div>
    );
}

const Massege = (props) => {
    return (
        <div className='masssage'>{props.massege}</div>
    );
}

let dialogsData = [
    { name: "Oleg", id: "0" },
    { name: "Diana", id: "1" },
    { name: "Alex", id: "2" },
    { name: "Andre", id: "3" },
];


let massageData = [
    { massege: "Hello", id: "0" },
    { massege: "How are you?", id: "1" },
    { massege: "Hi, i am fine", id: "2" },
    { massege: "yo", id: "3" },
    { massege: "cool", id: "4" },
];


const Dialogs = (props) => {
    return (
        <Dialog>
            <div className="dialogs-item">
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
               
            </div>
            <div className="massages">
                <Massege massege={massageData[0].massege} />
                <Massege massege={massageData[2].massege} />
                <Massege massege={massageData[3].massege} />
                <Massege massege={massageData[4].massege} />
            </div>
        </Dialog>
    )
}


export { Dialogs };