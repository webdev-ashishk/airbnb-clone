import { categories } from "@/config/categories";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex items-center px-10 pb-4 my-3 space-x-8 overflow-x-auto whitespace-nowrap">
      {categories.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <Image src={item.icon} width={40} height={40} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
