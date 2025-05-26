import { useReducer, useState } from "react";
import { toast } from "sonner";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "@/utils/validations";
import { sendMail } from "@/utils/sendEmail";
import {
  contactFormReducer,
  contactFormInitialState,
} from "@/utils/contactForm";

export function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contactForm, dispatch] = useReducer(
    contactFormReducer,
    contactFormInitialState
  );

  const nameError = validateName(contactForm.name);
  const emailError = validateEmail(contactForm.email);
  const messageError = validateMessage(contactForm.message);

  const formErrors = isSubmitting || nameError || emailError || messageError;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (nameError || emailError || messageError) return;

    setIsSubmitting(true);

    const promise = sendMail(
      contactForm.name.trim(),
      contactForm.email.trim(),
      contactForm.message.trim()
    );

    promise.then(() => dispatch({ type: "RESET" }));

    promise.finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Sending the message . . .",
      success: () => "Message sent successfully.",
      error: "An error occurred while sending the message.",
    });
  };

  return (
    <div className="pt-25" id="getInTouch">
      <div className="md:w-[60%] px-4 mx-auto w-full flex flex-col justify-center gap-8 pb-24">
        <p className="text-[40px] font-extrabold" role="heading">
          Get In Touch
        </p>
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-96 flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[15px]">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                aria-required
                type="text"
                value={contactForm.name}
                onChange={(e) => {
                  dispatch({
                    type: "SET_NAME",
                    payload: e.currentTarget.value,
                  });
                }}
                placeholder="Enter Your Name"
                className={`border border-gray h-10 rounded-lg pl-3 ${
                  contactForm.isNameTouched && nameError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              />
              <span className="text-sm text-red-500">
                {contactForm.isNameTouched && nameError}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                aria-required
                type="email"
                value={contactForm.email}
                onChange={(e) => {
                  dispatch({
                    type: "SET_EMAIL",
                    payload: e.currentTarget.value,
                  });
                }}
                placeholder="Enter Your Email"
                className={`border border-gray h-10 rounded-lg pl-3 ${
                  contactForm.isEmailTouched && emailError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              />
              <span className="text-sm text-red-500">
                {contactForm.isEmailTouched && emailError}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[15px]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                aria-required
                value={contactForm.message}
                onChange={(e) => {
                  dispatch({
                    type: "SET_MESSAGE",
                    payload: e.currentTarget.value,
                  });
                }}
                placeholder="How can I help ?"
                className={`border border-gray rounded-lg p-3 min-h-36 ${
                  contactForm.isMessageTouched && messageError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              ></textarea>
              <span className="text-sm text-red-500">
                {contactForm.isMessageTouched && messageError}
              </span>
            </div>
            <button
              disabled={Boolean(formErrors)}
              className="bg-primaryBlue text-white w-fit py-2 px-6 font-bold rounded-lg not-disabled:hover:brightness-80 not-disabled:cursor-pointer disabled:opacity-70"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
