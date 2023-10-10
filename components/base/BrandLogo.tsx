import Image from "next/image";

const BrandLogo = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        className="hidden lg:block"
        width={120}
        height={120}
        alt="logo"
      />
      <Image
        src="/images/logo-sm.png"
        className="lg:hidden"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
};

export default BrandLogo;
