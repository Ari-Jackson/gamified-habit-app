export default function Card({ children, onClick }) {
  return (
    <div onClick={onClick} className="m-auto w-[25rem] cursor-pointer">
      <div className="mx-auto mb-3 flex max-w-7xl space-y-0 space-x-6 rounded-xl bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}
