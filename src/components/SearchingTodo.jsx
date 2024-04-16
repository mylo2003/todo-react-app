function SearchingTodo() {
  return (
    <>
      <div className="flex flex-row gap-2 my-40">
        <div className="w-4 h-4 rounded-full bg-slate-400 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-slate-400 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-slate-400 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </>
  );
}

export { SearchingTodo };