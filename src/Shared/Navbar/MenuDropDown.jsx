import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
const MenuDropDown = () => {
  const [toggleIcon, setToggleIcon] = useState(false)
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)
  }
  return (
    <div onClick={handleToggleIcon} className="block md:hidden">
      {
         toggleIcon ? <HiX size={30} className="text-[#ffdd40]"></HiX> : <FaBars size={30} className="text-[#ffdd40]"></FaBars>
      }
    </div>
  );
};

export default MenuDropDown;

