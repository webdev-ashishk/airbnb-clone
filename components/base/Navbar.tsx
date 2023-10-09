import { Search } from "lucide-react";
import BrandLogo from "./BrandLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b-[1px] px-12">
      <div>
        <BrandLogo />
      </div>

      <div className="flex items-center p-2 space-x-2 border rounded-2xl">
        <span className="pl-2 text-sm">AnyWhere</span>
        <span>|</span>
        <span className="text-sm ">AnyWhere</span>
        <span>|</span>
        <span className="text-sm text-gray-400">Add Guest</span>
        <span className="p-2 text-white rounded-full bg-brand">
          <Search />
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <span>Add Your Home</span>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
