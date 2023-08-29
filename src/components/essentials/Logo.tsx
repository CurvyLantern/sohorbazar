import LogoImg from "@/assets/logo/logo.jpg";
const Logo = () => {
    return (
        <div className="w-32">
            <img
                className="w-full object-cover"
                src={LogoImg}
                alt="Mega Dhaka Logo"
                width={300}
                height={150}
            />
        </div>
    );
};

export default Logo;
