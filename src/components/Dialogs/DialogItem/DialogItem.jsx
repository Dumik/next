import React from 'react';
import { LinkElem } from './../Dialogs.styled'

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <LinkElem to={"/dialogs/" + props.id}>{props.name}</LinkElem>
        </div>
    );
}

export { DialogItem };