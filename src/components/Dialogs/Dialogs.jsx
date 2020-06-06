
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

let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let massageElements = massageData
    .map(massege => <Massege massege={massege.massege} id={massege.id} />)


const Dialogs = (props) => {
    return (
        <Dialog>
            <div className="dialogs-item">
                {dialogsElements}
            </div>
            <div className="massages">
                {massageElements}
            </div>
        </Dialog>
    )
}


export { Dialogs };