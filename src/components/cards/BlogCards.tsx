import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
const BlogCards = () => {
    return (
        <div className="h-[554px] w-[429px] shadow">
            <div>
                <img
                    src="https://i.ibb.co/HH0c4Lw/Rectangle-1171.png"
                    alt="blog"
                    className="h-[344px]"
                />
            </div>
            <div className="rounded p-2">
                <small>TagLine Here</small>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1>Rating: 4.92</h1>
                        </div>
                        <div className="my-2 flex items-center">
                            <FaStar className="text-lg text-yellow-400" />
                            <FaStar className="text-lg text-yellow-400" />
                            <FaStar className="text-lg text-yellow-400" />
                            <FaStar className="text-lg text-yellow-400" />
                            <FaRegStar className="text-lg text-yellow-400" />
                        </div>
                    </div>
                    <div className=" flex gap-5">
                        <span className="">
                            <FaRegMessage className=" absolute text-lg" />
                            <h1 className="relative -right-3 -top-2 rounded-full bg-teal-600 px-1 text-center text-xs text-white">
                                2
                            </h1>
                        </span>

                        <BsShare className="text-lg" />
                    </div>
                </div>
                <h1 className="text-lg">
                    কিভাবে মেগা ঢাকা থেকে পণ্য অর্ডার করবেন? বিস্তারিত পড়ুন
                </h1>
                <div className="mt-4">
                    <p className=" text-sm">
                        মেগা ঢাকা থেকে পণ্য কেনার জন্য আপনাকে কোন রকম কাস্টম
                        ঝামেলা এমনকি শিপিং ঝামেলায় পরতে হবে না
                    </p>
                    <a
                        href=""
                        className="text-blue-400">
                        continue reading ....
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
