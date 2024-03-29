import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Users = observer( ()=> {
    return (
        <div>
            {todo.todos.map(t =>
                <div key={t.id} >
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>X</button>
                </div>
            )}
        </div>
    )
})
export default Users;