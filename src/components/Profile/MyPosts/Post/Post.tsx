import React from 'react';
import s from './Post.module.css';
type MessageType = {
    message: string
    likesCount: number
}
const Post: React.FC<MessageType> = (props) => {
    return (
        <div>

            <div className={s.item}>
                <img
                    src={'data:image/jpeg;base64,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'}/>
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>

            </div>

        </div>

    )
}
export default Post;


