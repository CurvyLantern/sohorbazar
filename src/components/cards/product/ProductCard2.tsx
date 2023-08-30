import CategoryImg1 from "@/assets/categories/Category1.png";
const ProductCard2 = () => {
    return (
        <div className="flex  rounded-2xl bg-green-100">
            {/* content */}
            <div className="flex w-full items-center p-3">
                <p className="text-lg font-semibold">চাল ও খাদ্যশস্য</p>
            </div>
            {/* img */}
            <div className="w-full p-3">
                <img
                    className="h-full w-full object-cover"
                    src={CategoryImg1}
                    alt=""
                />
            </div>
        </div>
    );
};

export default ProductCard2;
