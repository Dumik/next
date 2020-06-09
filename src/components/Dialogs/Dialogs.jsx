
import React from 'react';
import { Dialog } from './Dialogs.styled'
import { DialogItem } from './DialogItem/DialogItem'
import { Massege } from './Massege/Massege'



const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let massageElements =
        props.massageData.map(massege => <Massege massege={massege.massege} id={massege.id} />)
        
    return (
        <Dialog >
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