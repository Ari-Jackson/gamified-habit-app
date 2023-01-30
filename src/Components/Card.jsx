export default function Card({ children }) {
  return (
    <div className="mx-auto mb-3 flex w-80 space-y-0 space-x-6 rounded-xl bg-white shadow-lg">
      {children}
    </div>
  );
}
