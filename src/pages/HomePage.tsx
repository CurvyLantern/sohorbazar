import HeroSection from "@/components/banner/HeroSection";
import NewFashion from "@/components/banner/newFashion/NewFashion";
import ExclusiveBanner from "@/components/banner/smallBanner/ExclusiveBanner";
import CategoryCard from "@/components/cards/category/CategoryCard";
import ProductCard from "@/components/cards/product/ProductCard";
import ProductCard2 from "@/components/cards/product/ProductCard2";
import ProductCard3 from "@/components/cards/product/ProductCard3";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
const HomePage = () => {
    return (
        <div className="">
            <HeroSection />

            <ProductSections title="Mega Flash Deal">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}>
                    {Array(10)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard2 key={idx} />;
                        })}
                </div>
            </ProductSections>
            <ProductSections title="Category of the Week">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6`}>
                    {Array(10)
                        .fill(0)
                        .map((_, idx) => {
                            return <CategoryCard key={idx} />;
                        })}
                </div>
            </ProductSections>
            <ExclusiveBanner />
            <ProductSections title="Low MOQ">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}>
                    {Array(10)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard key={idx} />;
                        })}
                </div>
            </ProductSections>
            <NewFashion />
            <ProductSections title="Women's Fashion">
                <div
                    className={`container grid grid-cols-1 gap-5 py-5 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}>
                    {Array(10)
                        .fill(0)
                        .map((_, idx) => {
                            return <ProductCard3 key={idx} />;
                        })}
                </div>
            </ProductSections>
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
