import { FaStar, FaRegStar } from "react-icons/fa";
const ProductCard3 = () => {
    return (
        <div className="border-1px h-[169px] w-[427px] rounded-sm border">
            <div className=" flex gap-5 p-4">
                <div className="relative w-1/2">
                    <img
                        src="https://i.ibb.co/Qb6GDWS/Rectangle-299-1.png"
                        alt="product-image"
                    />
                    <div className="absolute left-0 top-0 h-[19px] w-[42px] bg-green-500">
                        <h1 className="text-center text-[13px] text-white">
                            New
                        </h1>
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <h1 className="text-base font-bold">
                            Your Products Name Here
                        </h1>
                        <p className="my-2  flex items-center">
                            <span className="font- ml-2 flex items-center text-lg font-bold text-rose-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16px"
                                    viewBox="0 0 384 512"
                                    fill="#FF0000">
                                    <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                                </svg>
                                70
                            </span>
                            <span className="ml-2 text-gray-400 ">/foot</span>
                        </p>
                    </div>
                    <div className="my-2 flex items-center">
                        <FaStar className="text-lg text-yellow-400" />
                        <FaStar className="text-lg text-yellow-400" />
                        <FaStar className="text-lg text-yellow-400" />
                        <FaStar className="text-lg text-yellow-400" />
                        <FaRegStar className="text-lg text-yellow-400" />
                        <span className="ml-2 text-lg text-gray-200">(1)</span>
                    </div>
                    <div className="my-4 text-sm">
                        <h1>Sold: 3470 </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard3;
