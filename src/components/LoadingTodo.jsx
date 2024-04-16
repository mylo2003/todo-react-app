function LoadingTodo() {
  return (
    <>
    <div className="relative flex w-64 animate-pulse px-4 pb-4 pt-2">
      <div className="absolute bottom-7 left-0 h-6 w-6 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="ml-3 mb-1 h-4 w-3/4 rounded-lg bg-slate-400 text-lg"></div>
        <div className="ml-3 h-4 w-[70%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-7 right-0 h-6 w-6 rounded-full bg-slate-400"></div>
    </div>
    <div className="relative flex w-64 animate-pulse px-4 pb-4 pt-2">
      <div className="absolute bottom-7 left-0 h-6 w-6 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="ml-3 mb-1 h-4 w-3/4 rounded-lg bg-slate-400 text-lg"></div>
        <div className="ml-3 h-4 w-[70%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-7 right-0 h-6 w-6 rounded-full bg-slate-400"></div>
    </div>
    <div className="relative flex w-64 animate-pulse px-4 pb-4 pt-2">
      <div className="absolute bottom-7 left-0 h-6 w-6 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="ml-3 mb-1 h-4 w-3/4 rounded-lg bg-slate-400 text-lg"></div>
        <div className="ml-3 h-4 w-[70%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-7 right-0 h-6 w-6 rounded-full bg-slate-400"></div>
    </div>
    </>
  );
}

export { LoadingTodo };