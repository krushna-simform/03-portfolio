import { ContactFormState } from "@/types/types";

export const contactFormInitialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
  isNameTouched: false,
  isEmailTouched: false,
  isMessageTouched: false,
} as const;

type ContactFormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "RESET" };

export function contactFormReducer(
  state: ContactFormState,
  action: ContactFormAction
): ContactFormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, isNameTouched: true };
    case "SET_EMAIL":
      return { ...state, email: action.payload, isEmailTouched: true };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
        isMessageTouched: true,
      };
    case "RESET":
      return contactFormInitialState;
  }
}
