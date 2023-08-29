import BannerImg1 from "@/assets/banner/banner1.jpg";
import BannerImg2 from "@/assets/banner/banner2.jpg";
import BannerImg3 from "@/assets/banner/banner3.jpg";
import ProductCard from "@/components/cards/product/ProductCard";
import ProductCard2 from "@/components/cards/product/ProductCard2";
import ProductCard3 from "@/components/cards/product/ProductCard3";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
const HomePage = () => {
    return (
        <div className="">
            {/* HeroSection */}
            <section>
                <img
                    className="h-full w-full object-cover"
                    src={BannerImg1}
                    alt=""
                />
            </section>

            {/* category section */}
            <ProductSections title="Top Categories">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}>
                    {Array(8)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard2 key={idx} />;
                        })}
                </div>
            </ProductSections>

            {/* banner 2 */}
            <section>
                <div className="container">
                    <img
                        className="h-full w-full object-cover"
                        src={BannerImg2}
                        alt=""
                    />
                </div>
            </section>

            <ProductSections title="Top foods and mudi">
                <div
                    className={`container grid grid-cols-1 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6`}>
                    {Array(12)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard key={idx} />;
                        })}
                </div>
            </ProductSections>

            {/* brand section */}
            <ProductSections title="Trusted brands">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6`}>
                    {Array(12)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard3 key={idx} />;
                        })}
                </div>
            </ProductSections>

            {/* banner */}
            <section>
                <div className="container">
                    <img
                        className="h-full w-full object-cover"
                        src={BannerImg3}
                        alt=""
                    />
                </div>
            </section>
        </div>
    );
};

type ProductSectionsProps = {
    title: string;
    children: React.ReactNode;
};
const ProductSections = ({ title, children }: ProductSectionsProps) => {
    return (
        <section
            className={`my-4 flex flex-col gap-4 ${
                title === "Category of the Week" ? "bg-slate-100" : ""
            } `}>
            <header className="container flex flex-col items-center justify-between gap-2 py-5 xsm:flex-row">
                <h3 className="text-lg font-semibold">
                    {title ? title : "Mega Top Categorie's Products"}
                </h3>

                <div>
                    <Button
                        variant="outline"
                        size="sm">
                        More Products <ChevronRight size={20} />
                    </Button>
                </div>
            </header>
            {children}
        </section>
    );
};

export default HomePage;
