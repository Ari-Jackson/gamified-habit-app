export default function Container({ children }) {
  return (
    <div className="mx-auto my-4 w-fit rounded-lg border-2 border-solid border-slate-500 p-4">
      {children}
    </div>
  );
}
