import Image from "next/image";
import Link from "next/link";

type NavBarProps = {
  logoUrl: string;
  logoUrlAlt: string;
};

const NavBar = ({ logoUrl, logoUrlAlt }: NavBarProps) => {
  return (
    <nav
      className={[
        "flex",
        "items-center",
        "justify-center",
        "md:max-w-11/12",
        "mx-auto",
        "p-4",
      ].join(" ")}
    >
      <div className="flex items-center">
        <Image src={logoUrl} alt={logoUrlAlt} width={350} height={50}></Image>
        {/* <h1 className="text-24">Ankuchi</h1> */}
      </div>

      <div className="hidden md:flex grow justify-end">
        <ul
          className={["md:flex", "items-center", "gap-[2vw]"].join(" ")}
        >
          <li className="hover:scale-105 cursor-pointer text-secondary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:scale-105 cursor-pointer text-secondary">
            <Link href={"/about-us"} className="whitespace-nowrap">
              About Us
            </Link>
          </li>

          <li>
            <button
              className={[
                "bg-secondary",
                "px-4",
                "rounded-full",
                "text-primary",
                "hover:scale-105",
                "cursor-pointer",
                "transition-transform duration-300",
              ].join(" ")}
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
export type { NavBarProps };
