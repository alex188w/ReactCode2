// Создать компонент CommentsList, который отображает список комментариев. 
// Каждый комментарий должен иметь кнопку для его удаления. При нажатии на 
// кнопку комментарий должен удаляться из списка.

import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const RemoveComment = (idToRemove) => {
        setComments(comments.filter((comment) => comment.id !== idToRemove));
    }

    return (
        <div>
            <ul className="comments">
                {comments.map((comment) => (
                    <div className="comment">
                        <li key={comment.id}>{comment.text}</li>
                        <button onClick={() => RemoveComment(comment.id)}>Удалить комментарий</button>
                    </div>
                ))}
            </ul>

        </div>
    );
}

export default CommentsList;