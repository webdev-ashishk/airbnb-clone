import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModel from "../Auth/LoginModel";
import SignupModel from "../Auth/SignupModel";

const NavMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          <LoginModel />
          <SignupModel />
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
