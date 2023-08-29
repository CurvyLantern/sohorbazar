import BrandImg1 from "@/assets/brands/uniliver.png";
const ProductCard3 = () => {
    return (
        <div className="flex aspect-[16/12] items-center justify-center rounded-md border">
            <img
                src={BrandImg1}
                alt=""
                className="h-1/2 object-contain"
            />
        </div>
    );
};

export default ProductCard3;
