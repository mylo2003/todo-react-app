function TodoList(props) {
  return (
    <div className="w-[311px] h-[400px] py-5 overflow-y-auto scrollbar-hide border-t-2 border-[#CBEFDA] rounded-xl shadow-xl bg-[#3B5556]/60 mx-auto my-5 flex justify-center">
      <ul>{props.children}</ul>
    </div>
  );
}

export { TodoList };
