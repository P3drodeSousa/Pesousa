import { useRef, useState } from "react";
import { mutate } from "swr";

import SuccessMessage from "@/components/Utils/SucessMessage";
import ErrorMessage from "@/components/Utils/ErrorMessage";
import LoadingSpinner from "@/components/Utils/Loading";
import useTranslation from "next-translate/useTranslation";

enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

type FormState = {
  state: Form;
  message?: string;
};

export default function GuestBookform() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    mutate("/api/guestbook");
    setForm({
      state: Form.Success,
      message: t("guestbook:formSucess"),
    });
  };

  return (
    <div className="mt-4 space-y-8">
      <form className="relative my-4 flex items-center" onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          aria-label={t("guestbook:formPlaceholder")}
          placeholder={t("guestbook:formPlaceholder")}
          required
          className=" bg-transparent outline-none rounded border focus:border-indigo-500 dark:focus:border-pink-500 dark:border-gray-700 dark:text-whit pl-4 pr-32 py-2 mt-1  block w-full"
        />
        <button
          className="flex items-center justify-center absolute right-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? (
            <LoadingSpinner />
          ) : (
            t("guestbook:formButton")
          )}
        </button>
      </form>

      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {t("guestbook:trust")}
        </p>
      )}
    </div>
  );
}
