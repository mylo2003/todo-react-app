function TodoList(props) {
  return (
    <div className="w-[311px] h-[400px] border-t-2 border-[#CBEFDA] rounded-xl shadow-xl bg-[#3B5556]/60  mx-auto my-5 flex justify-center">
      <ul className="mt-5">{props.children}</ul>
    </div>
  );
}

export { TodoList };
