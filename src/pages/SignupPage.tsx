import { FaAngleDown, FaApple, FaFacebook, FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <div className="  bg-red-50">
            <div className="pt-20"></div>
            <div className="flex flex-col  gap-24 md:mx-28  md:flex-row">
                <div className="h-[585px] w-[530px] rounded-md  p-6">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Welcome to
                            <span className="text-rose-500"> Mega Dhaka</span>
                        </h1>
                        <p className="my-6">
                            One-stop wholesale business solution of imported
                            products. We ensure product quality, on time
                            delivery and hassle free service.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="flex-1">
                            <div className="flex">
                                <div className="rounded-full ">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-ml-3 rounded-full">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-ml-3 rounded-full">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-ml-3 rounded-full">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-ml-3 rounded-full">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-ml-3 rounded-full">
                                    <img
                                        src="https://i.ibb.co/xCXtCSz/Ellipse-41.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-bold">
                                20k+ buyers joined with us, now it's your turn.
                            </h3>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/QF48X0r/Online-shopping-pana-1.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" h-[600px] w-[891px] rounded-md bg-white p-4 shadow-md">
                    <div className=" flex items-center justify-between">
                        <div className="flex h-7 w-20 items-center justify-center border p-1">
                            <img
                                src="united states.svg"
                                alt=""
                                className="h-4"
                            />
                            <h1>Eng</h1>
                            <FaAngleDown className="ml-1" />
                        </div>
                        <div className="my-8 flex flex-col items-center justify-between md:flex-row">
                            <div className="flex items-center gap-1">
                                <h1>Already have an account?</h1>
                                <Link
                                    to="/login"
                                    className="text-rose-500">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[450px]">
                        <h1 className="text-3xl">Create your free account</h1>
                        <form className="my-4">
                            <div>
                                <label
                                    className="flex text-sm"
                                    htmlFor="fullName">
                                    Full Name
                                    <span>
                                        <FaStar className="text-[6px] text-red-500" />
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your Full Name"
                                    className="focus required w-full rounded bg-gray-100 p-2 text-xs focus:border focus:border-rose-500
                                 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mt-3">
                                <label
                                    className="flex text-sm"
                                    htmlFor="fullName">
                                    Mobile Or Email
                                    <span>
                                        <FaStar className="text-[6px] text-red-500" />
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    id="fullName"
                                    placeholder="Enter your mobile number or e-mail address"
                                    className="focus required w-full rounded bg-gray-100 p-2 text-xs focus:border focus:border-rose-500
                                 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mt-3">
                                <label
                                    className="flex text-sm"
                                    htmlFor="fullName">
                                    Password
                                    <span>
                                        <FaStar className="text-[6px] text-red-500" />
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter a password, at least 8 characters"
                                    className="focus required w-full rounded bg-gray-100 p-2 text-xs focus:border focus:border-rose-500
                                 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="my-6 w-full rounded-md bg-rose-500 p-3">
                                <h1 className="text-center text-white">
                                    Create an account
                                </h1>
                            </div>
                        </form>
                        <div className=" flex items-center gap-1 ">
                            <div className="flex-1 bg-slate-900  pt-[1px]"></div>
                            <div className="flex-1">
                                <h1 className="text-center">Or sign up with</h1>
                            </div>
                            <div className="flex-1 bg-slate-900  pt-[1px]"></div>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <div className="flex h-12 w-20 items-center justify-center rounded-md border bg-slate-50">
                                <FcGoogle />
                            </div>
                            <div className="flex h-12 w-20 items-center justify-center rounded-md border bg-slate-50">
                                <FaFacebook className="text-blue-700" />
                            </div>
                            <div className="flex h-12 w-20 items-center justify-center rounded-md border bg-slate-50">
                                <FaApple />
                            </div>
                        </div>
                        <div className="mt-4 ">
                            <h5 className="text-center text-xs">
                                By signing up, you agree to our Terms of
                                Condition and Privacy Policy.
                            </h5>
                            <div className="flex items-center justify-center gap-1">
                                <h6 className=" text-sm">Need Help?</h6>
                                <p className="font-bold text-blue-500">
                                    Live Chat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-10"></div>
        </div>
    );
};

export default SignupPage;
