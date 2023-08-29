import LogoImg from "@/assets/logo.svg";
const Logo = () => {
  return (
    <div className="w-52">
      <img
        className="max-w-full object-cover"
        src={LogoImg}
        alt="Mega Dhaka Logo"
        width={300}
        height={150}
      />
    </div>
  );
};

export default Logo;
