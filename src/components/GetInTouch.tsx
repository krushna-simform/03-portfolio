import { useState } from "react";
import { toast } from "sonner";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "@/utils/validations";
import { sendMail } from "@/utils/sendEmail";

export function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isMessageTouched, setIsMessageTouched] = useState(false);

  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const messageError = validateMessage(message);

  const formErrors = isSubmitting || nameError || emailError || messageError;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (nameError || emailError || messageError) return;

    setIsSubmitting(true);

    const promise = sendMail(name, email, message);

    promise.then(() => {
      setName("");
      setEmail("");
      setMessage("");

      setIsNameTouched(false);
      setIsEmailTouched(false);
      setIsMessageTouched(false);
    });

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
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                  setIsNameTouched(true);
                }}
                placeholder="Enter Your Name"
                className={`border border-gray h-10 rounded-lg pl-3 ${
                  isNameTouched && nameError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              />
              <span className="text-sm text-red-500">
                {isNameTouched && nameError}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setIsEmailTouched(true);
                }}
                placeholder="Enter Your Email"
                className={`border border-gray h-10 rounded-lg pl-3 ${
                  isEmailTouched && emailError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              />
              <span className="text-sm text-red-500">
                {isEmailTouched && emailError}
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
                value={message}
                onChange={(e) => {
                  setMessage(e.currentTarget.value);
                  setIsMessageTouched(true);
                }}
                placeholder="How can I help ?"
                className={`border border-gray rounded-lg p-3 min-h-36 ${
                  isMessageTouched && messageError
                    ? "focus:outline-none focus:border-red-500"
                    : ""
                }`}
              ></textarea>
              <span className="text-sm text-red-500">
                {isMessageTouched && messageError}
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
