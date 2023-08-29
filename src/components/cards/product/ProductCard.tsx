import ProductImg from "@/assets/product.jpg";
import Rating from "@/components/Rating";
const ProductCard = () => {
    return (
        <article className="">
            {/* product img */}
            <div className="aspect-video w-full overflow-hidden rounded-primary">
                <img
                    className="max-h-full w-full object-cover"
                    src={ProductImg}
                    alt="product image"
                    width={200}
                    height={200}
                />
            </div>

            <div className="px-4 py-2">
                {/* product name */}
                <h4 className="text-sm font-semibold capitalize text-primary">
                    product name
                </h4>

                <div className="flex items-center justify-between">
                    {/* price */}
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold uppercase">
                            bdt
                        </span>
                        <div className="flex items-end">
                            {/* current price */}
                            <p className="text-base font-bold text-highlight">
                                {" "}
                                60
                            </p>

                            {/* old price */}
                            <p className="ml-1 text-xs text-primary line-through">
                                {" "}
                                100
                            </p>
                        </div>
                    </div>
                    {/* rating */}
                    {/* <div className="flex items-center gap-[2px] text-orange-600">
            <Star size={8} fill="yellow" />
            <Star size={8} />
            <Star size={8} />
            <Star size={8} />
            <Star size={8} />
            <span className="ml-3 text-xs text-foreground">(1)</span>
          </div> */}
                    <Rating
                        avgRating={3.5}
                        outOfRating={5}
                        ratingCount={20}
                    />
                </div>

                <div className=" flex items-center justify-between text-xs">
                    {/* sold */}
                    <p>sold 10000</p>

                    {/* in stock */}
                    <p>50 remaining</p>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
