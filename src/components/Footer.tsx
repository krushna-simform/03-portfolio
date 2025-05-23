import { LineAttractor } from "@/components/ui/LineAttractor";
import { CONTACT_LINKS } from "@/data/contactLinks";

export const Footer = () => {
  return (
    <div className="bg-[#0000FE]">
      <div className="md:w-[60%] px-4 mx-auto py-10 mt-35">
        <LineAttractor />
        <div className="mt-10 text-2xl">
          <p className="text-white text-2xl">Contact Me</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {CONTACT_LINKS.map((contacts) => (
              <a
                href={contacts.link}
                target="_blank"
                aria-label={`${contacts.ariaLabel} link (opens in a new tab)`}
                className="inline-flex items-center gap-2 text-white bg-[#2727FE] py-2 px-8 rounded-full"
                key={contacts.id}
              >
                {contacts.children}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
