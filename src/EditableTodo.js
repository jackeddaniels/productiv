import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, update, remove}) {

  const [isEditing, setIsEditing] = useState(false)

  /** Toggle if this is being edited */
  //TODO: need callback pattern here
  function toggleEdit() {
    setIsEditing(!isEditing)
   }

  /** Call remove fn passed to this. */
  function handleDelete() {
   remove(todo.id)
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({...todo, ...formData})
    setIsEditing(false)
   }
//TODO: Format ternary below
  return (
      <div className="EditableTodo">

          {isEditing ? (
          <TodoForm  initialFormData={todo} handleSave={handleSave}/>
          ) : (
            <div className="mb-3">
            <div className="float-end text-sm-end">
              <button
                  id="editButton"
                  className="EditableTodo-toggle btn-link btn btn-sm"
                  onClick={toggleEdit}>
                Edit
              </button>
              <button
                  id="delButton"
                  className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                  onClick={handleDelete}>
                Del
              </button>
            </div>
            <Todo todo={todo}/>
          </div>
          )}
      </div>
  );
}

export default EditableTodo;
