import Image from "next/image";

const BrandLogo = () => {
  return (
    <div>
      <Image src="/images/logo.png" width={120} height={120} alt="logo" />
    </div>
  );
};

export default BrandLogo;
