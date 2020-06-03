
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



const Dialogs = (props) => {
    return (
        <Dialog>
            <div className="dialogs-item">
                <DialogItem name='Oleg' id='1' />
                <DialogItem name='Diana' id='2' />
                <DialogItem name='Alex' id='3' />
                <DialogItem name='Jhonny' id='4' />
            </div>
            <div className="massages">
                <Massege massege=" Hello" />
                <Massege massege=" How are you?" />
                <Massege massege=" Hello" />
                <Massege massege="  I am fine! How are you?" />


            </div>
        </Dialog>
    )
}


export { Dialogs };