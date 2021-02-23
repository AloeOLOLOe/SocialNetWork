import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';


type DialogType = {
    name: string
    id: number
}
type MessageType = {
    /*id:number*/
    message: string
}
type DialogsPageType = {
    dialogsData:Array<DialogType>
    messagesData:Array<MessageType>
}

const DialogItem: React.FC<DialogType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>

    )
}
const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>

    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},

    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yoyo'},
        {id: 5, message: 'yoyoyo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>

            </div>
        </div>
    )
}