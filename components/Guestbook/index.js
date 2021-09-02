import { useState } from "react";
import { format } from "date-fns";
import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";

export default function GuestBookEntry({ initialEntries, user }) {
  const [erasing, setErasing] = useState(false);

  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    initialData: initialEntries,
  });
  const deleteEntry = async (id, e) => {
    e.preventDefault();

    setErasing(true);

    await fetch(`/api/guestbook/${id}`, {
      method: "DELETE",
    });
    mutate("/api/guestbook");
    setErasing(false);
  };

  return (
    <div className="flex flex-col space-y-2">
      {entries?.map((entry) => (
        <div className="mt-4 space-y-8" key={entry.ID}>
          <div className="w-full">{entry.message}</div>
          <div className="flex items-center space-x-3">
            <p className="text-sm text-gray-500">{entry.name}</p>
            <span className=" text-gray-200 dark:text-gray-800">/</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">
              {format(new Date(entry.updated_at), "dd/MM/yyyy '-' hh:mm ")}
            </p>
            {user && entry.name === user && (
              <>
                <span className="text-gray-200 dark:text-gray-800">/</span>

                {erasing ? (
                  <p className="deleting text-sm text-red-600 dark:text-red-400">
                    Delete<span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </p>
                ) : (
                  <button
                    className="text-sm text-red-600 dark:text-red-400 "
                    onClick={(e) => deleteEntry(entry.ID, e)}
                  >
                    Delete
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
