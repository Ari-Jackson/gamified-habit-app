export default function Card({ children, onClick }) {
  return (
    <div onClick={onClick} className="h-full w-full">
      <div className="mx-auto mb-3 flex h-full max-w-7xl space-y-0 space-x-6 rounded-xl bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}

{
  /*  */
}
