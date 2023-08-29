import { AspectRatio } from "@/components/ui/aspect-ratio";

const CategoryCard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-primary bg-white p-3">
            {/* w-8/12 */}
            <div className="w-8/12">
                <AspectRatio ratio={1}>
                    <img
                        src="https://i.ibb.co/XFKZXxH/pexels-tranmautritam-2061057.jpg"
                        alt=""
                        className="h-full w-full rounded-full object-cover"
                    />
                </AspectRatio>
            </div>

            <div>
                <h3>Kid Zone</h3>
            </div>
        </div>
    );
};

export default CategoryCard;
