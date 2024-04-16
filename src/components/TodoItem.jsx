function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`w-[274px] p-2 min-h-12 max-h-20 text-balance overflow-hidden rounded-xl ${completed == true ? 'bg-[#8d8d8ddc]' : 'bg-[#59FF9B]'} mb-2 flex items-center`}>
      <span
        className="cursor-pointer"
        onClick={onComplete}
      >
        <i className={`bx bx-check-circle ${completed && 'bx bxs-check-circle'} mr-1 text-2xl text-[#5B5B5B] transtion-all hover:text-[#212121]`}></i>
      </span>
      <p className={`text-[#5B5B5B] w-[210px] font-semibold text-base ${completed && 'line-through'}`}>{text}</p>
      <span
        className="cursor-pointer"
        onClick={onDelete}>
        <i className={`bx bx-x-circle text-2xl transition-all text-red-400 hover:text-red-800`}></i>
      </span>
    </li>
  );
}

export { TodoItem };