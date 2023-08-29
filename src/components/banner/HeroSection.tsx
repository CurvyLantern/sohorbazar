import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    FaOpencart,
    FaLocationArrow,
    FaMessage,
    FaHeadset,
} from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section
            className={` relative mt-2 bg-[url(https://i.ibb.co/7vGYpXs/pexels-tom-fisk-3840441-1.jpg)] bg-cover bg-center`}>
            {/* overlay */}
            <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>

            {/* contents */}
            <div className=" container relative flex h-screen items-center  justify-center ">
                <div className="w-3/4">
                    <h6 className="text-5xl font-bold uppercase leading-relaxed text-white">
                        Get your imported products From
                        <span className="text-primary"> china </span>
                        within
                        <span className="text-primary"> 14 days </span>
                        WITH
                        <span className="text-blue-500"> Fast Delivery</span>
                    </h6>
                    <h4 className=" mt-4 w-1/2 text-3xl leading-snug text-white">
                        Get your favorite cosmetics products with{" "}
                        <span className="text-primary">25% </span>
                        discount for new buyers
                    </h4>
                    <div className="mt-6 flex items-center gap-4">
                        <Button size="lg">Show Now</Button>
                        <Link
                            to="/"
                            className="font-bold text-primary underline">
                            Browse all
                        </Link>
                    </div>
                </div>
                <div className="flex-1  ">
                    <div className="grid grid-cols-2 justify-items-end gap-4">
                        <div className="col-span-11  ">
                            <button className="rounded bg-blue-400 px-2 py-2 text-white">
                                <FaOpencart size={15} />
                            </button>
                        </div>
                        <div className="col-span-11 ">
                            <button className="rounded bg-blue-400 px-2 py-2 text-white">
                                <FaLocationArrow size={15} />
                            </button>
                        </div>
                        <div className="col-span-11 ">
                            <button className="rounded bg-blue-400 px-2 py-2 text-white">
                                <FaMessage size={15} />
                            </button>
                        </div>
                        <div className="col-span-11 ">
                            <button className="rounded bg-blue-400 px-2 py-2 text-white">
                                <FaHeadset size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
