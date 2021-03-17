import {addPost, RootStateType} from "./components/redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}