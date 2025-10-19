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
        "justify-between",
        "items-center",
        "w-[92%]",
        "margin-auto",
      ].join(" ")}
    >
      <div className="flex items-center">
        <Image src={logoUrl} alt={logoUrlAlt} width={350} height={50}></Image>
        {/* <h1 className="text-24">.</h1> */}
      </div>

      <div className="flex grow justify-end">
        <ul className={["flex", "items-center", "gap-[2vw]"].join(" ")}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>

          <li>
            <button
              className={[
                "bg-secondary",
                "text-white",
                "px-4",
                "py-2",
                "rounded-full",
                "hover:scale-2",
              ].join()}
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
