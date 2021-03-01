import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { Settings } from './components/Settings/Settings';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
type posts = {
    id:number
    message: string
    likesCount: number
}
type dialogs = {
    id:number
    name: string
}
type messages = {
    id:number
    message: string
}

type AppType={
    posts:Array<posts>
    dialogs:Array<dialogs>
    messages:Array<messages>
}


const App:React.FC<AppType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.posts}/>}/>
                    <Route path='/News' render={()=><News/>}/>
                    <Route path='/Music' render={()=><Music/>}/>
                    <Route path='/Settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
