import { categories } from "@/config/categories";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex items-center p-2 mt-2 space-x-4 mt-">
      {categories.map((item) => (
        <div key={item.id}>
          <Image src={item.icon} width={40} height={40} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
