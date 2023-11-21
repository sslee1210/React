const TodoItem = ({ list, onDel, onMod }) => {
  const { id, text, isChk } = list;

  return (
    <li
      style={isChk ? { textDecoration: "line-through" } : {}}
      className={isChk ? "on" : ""}>
      <em onClick={() => onMod(id)}>{text}</em>
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
