import Container from "../Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <div className="bg-[#181818] fixed w-full">
      <Container>
        <div className="flex items-center justify-between px-10">
          <div>
            <Logo></Logo>
          </div>
          <div className="hidden md:block">
          <MenuItem address={"/"} label={"Home"}></MenuItem>
          <MenuItem address={"/about"} label={"About Me"}></MenuItem>
          <MenuItem address={"/skills"} label={"Skills"}></MenuItem>
          <MenuItem address={"/resume"} label={"Resume"}></MenuItem>
          <MenuItem address={"/contact"} label={"Contact"}></MenuItem>
          </div>
          <MenuDropDown></MenuDropDown>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;



