export default function Button({ children }) {
  return (
    <button className="rounded-full border border-teal-200 px-4 py-1 text-sm font-semibold text-teal-600 hover:border-transparent hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
      {children}
    </button>
  );
}
