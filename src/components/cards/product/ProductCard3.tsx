import Rating from "@/components/Rating";
import IconBdt from "@/components/icons/IconBdt";

const ProductCard3 = () => {
    return (
        <div className="flex gap-5 rounded-sm border p-4">
            <div className="relative w-1/2">
                <img
                    src="https://i.ibb.co/Qb6GDWS/Rectangle-299-1.png"
                    alt="product-image"
                    className="h-full w-full rounded-sm object-contain"
                />
                <p className="absolute left-0 top-0 h-5 w-11 bg-green-500  text-center text-sm text-white">
                    New
                </p>
            </div>
            <div className="w-1/2">
                <div>
                    <h3 className="font-bold">Your Products Name Here</h3>
                    <p className="my-2 flex items-center">
                        <span className=" ml-2 flex items-center text-lg font-bold text-primary">
                            <IconBdt />
                            70
                        </span>
                        <span className="ml-2 text-gray-400 ">/foot</span>
                    </p>
                </div>
                <Rating
                    avgRating={3.5}
                    outOfRating={5}
                    ratingCount={10}
                />
                <p className="my-2 text-sm">Sold: 3470</p>
            </div>
        </div>
    );
};

export default ProductCard3;
