import { Navbar } from "flowbite-react";
import SideBar from "./SideBar";

export default function NavbarSec() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <a href="/Home">
          <img
            src="/tumeiget.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </a>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tumeiget
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="md:hidden">
        
      </Navbar.Collapse>
    </Navbar>
  );
}
