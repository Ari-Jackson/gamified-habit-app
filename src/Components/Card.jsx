export default function Card({ children }) {
  return (
    <div class="mx-auto flex space-y-0 space-x-6 rounded-xl bg-white px-8 py-4 shadow-lg">
      {children}
    </div>
  );
}
