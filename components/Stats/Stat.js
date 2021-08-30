export default function Stat({ title, stat }) {
  const addComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="flex-1 border rounded-lg p-12 flex flex-col items-center justify-center dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <div className="text-indigo-500 bg-indigo-50 inline-block rounded-full px-3 py-1 text-base font-semibold mb-4 dark:bg-gray-800 dark:text-pink-500">
        {title}
      </div>
      <h3 class="font-extrabold text-4xl tracking-tighter dark:text-white">
        <span>{addComma(stat)}</span>
      </h3>
    </div>
  );
}
