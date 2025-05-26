import { init, send } from "@emailjs/browser";

init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

export async function sendMail(name: string, email: string, message: string) {
  const response = await send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name,
      email,
      message,
    }
  );

  return response.text;
}
