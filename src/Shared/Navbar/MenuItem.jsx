import { NavLink } from "react-router-dom";


const MenuItem = ({address, label}) => {
  return (
    <>
      <NavLink
        to={address}
        className={({ isActive }) =>
          ` uppercase  text-[#ffdd40] font-semibold   ${
            isActive ? "border-b-[2px] border-[#ffdd40]" : " px-3 py-3"
          }`
        }
      >
        <span className="font-medium">{label}</span>
      </NavLink>
      
    </>
  );
};

export default MenuItem;
