import ProductImg1 from "@/assets/products/Biryani.png";
import IconBdt from "@/components/icons/IconBdt";
import { Button } from "@/components/ui/button";
import { TbHeart, TbShoppingBag } from "react-icons/tb";
const ProductCard = () => {
    return (
        <article
            className="group relative box-border rounded-lg outline outline-2 outline-border hover:rounded-b-none
        hover:outline-4 hover:outline-secondary">
            {/* product img */}
            <div className="aspect-square w-full overflow-hidden rounded-primary">
                <img
                    className="h-full w-full object-contain"
                    src={ProductImg1}
                    alt="product image"
                    width={200}
                    height={200}
                />
            </div>

            <div className="px-4 py-2 text-center">
                {/* product name */}
                <h4 className="text-lg font-semibold capitalize text-primary">
                    বিরিয়ানি মসলা
                </h4>

                {/* price */}
                <div className="flex items-center justify-center gap-1">
                    <IconBdt />
                    <p className="text-lg font-semibold">৬৫</p>
                </div>
            </div>

            {/* wishlist */}
            <div className="absolute right-0 top-0 p-3 text-xl text-rose-500 group-hover:text-secondary">
                <TbHeart />
            </div>

            <div
                style={{
                    width: "calc(100% + 8px)",
                    top: "100%",
                    left: "-4px",
                }}
                className="absolute z-50 hidden rounded-lg rounded-t-none bg-background p-3 group-hover:block group-hover:border-4
                group-hover:border-t-0 group-hover:border-secondary">
                <Button className=" w-full rounded-md bg-secondary  py-4 text-secondary-foreground">
                    <span className="flex items-center ">
                        <span className="text-xl font-bold">
                            <TbShoppingBag />
                        </span>
                        <span className="ml-4 ">Add Product</span>
                    </span>
                </Button>
            </div>
        </article>
    );
};

export default ProductCard;
