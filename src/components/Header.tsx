import type { NavbarLinkType } from "@/utils/types";

const navbarLinks: Array<NavbarLinkType> = [
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export const Header = () => {
  return (
    <header className="h-[55px] bg-primaryBlack text-white border-b-[1px] fixed top-0 left-0 w-full z-20">
      <div className="flex items-center justify-between h-full md:w-[62%] px-4 mx-auto">
        <a href="#home" className="text-2xl hover:brightness-80" role="button">
          Krushna
        </a>
        <nav>
          <ul className="hidden gap-10 md:flex">
            {navbarLinks.map((navLinks) => (
              <li className="py-[11px] hover:border-b-1 cursor-pointer">
                <a href={navLinks.href} role="button">
                  {navLinks.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-primaryBlue text-[13px] h-[34px] w-[125.6px] flex items-center justify-center rounded-[4px] cursor-pointer hover:brightness-90">
          GET IN TOUCH
        </button>
      </div>
    </header>
  );
};
