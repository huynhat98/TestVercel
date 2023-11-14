import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  TodoList: PropTypes.array,
};

TodoList.defaultProps = {
  TodoList: [],
};

function TodoList({ todoList }) {
  // const {todoList} = props;

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
