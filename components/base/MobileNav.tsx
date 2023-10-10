import { Search, SlidersHorizontal } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="flex justify-between items-center my-3 border rounded-3xl px-5  m-4">
      <div className="flex justify-center items-center my-1">
        <Search />
        <div className="flex flex-col ml-3">
          <span className="text-sm font-semibold">AnyWhere</span>
          <span className="text-sm">Any week . Add Guest</span>
        </div>
      </div>
      <SlidersHorizontal />
    </div>
  );
};

export default MobileNav;
