import { format } from "date-fns";
import { mutate } from "swr"

export default function GuestBookEntry({ entries, user }) {
  const deleteEntry = async (id, e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${id}`, {
      method: "DELETE",
    });

    mutate("/api/guestbook");
  };

  return (
    <div className="flex flex-col space-y-2">
      {entries?.map((entry) => (
        <div className="mt-4 space-y-8" key={entry.ID}>
          <div className="prose dark:prose-dark w-full">{entry.message}</div>
          <div className="flex items-center space-x-3">
            <p className="text-sm text-gray-500">{entry.name}</p>
            <span className=" text-gray-200 dark:text-gray-800">/</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">
              {format(new Date(entry.updated_at), "dd/MM/yyyy '-' h:mm ")}
            </p>
            {user && entry.name === user && (
              <>
                <span className="text-gray-200 dark:text-gray-800">/</span>
                <button
                  className="text-sm text-red-600 dark:text-red-400 "
                  onClick={(e) => deleteEntry(entry.ID, e)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
