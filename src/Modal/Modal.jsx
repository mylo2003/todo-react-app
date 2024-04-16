import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="w-[350px] h-[350px]
      absolute top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%]
      p-10 z-20 border border-white/50 rounded-2xl shadow-xl backdrop-blur-sm
      bg-[#116762]/90">
      { children }
      
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
