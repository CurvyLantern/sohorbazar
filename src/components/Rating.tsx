import { TbStar, TbStarHalfFilled, TbStarFilled } from "react-icons/tb";

const calcStarsForRating = (avg: number, max: number) => {
    // example input 7.5
    const _avg = Math.min(max, avg);
    const fillCount = Math.floor(_avg); // 7
    const halfCount = Math.round(_avg - fillCount); // round(.5) = 1
    const emptyCount = max - fillCount - halfCount;

    return { fillCount, halfCount, emptyCount };
};

type RatingProps = {
    ratingCount: number;
    avgRating: number;
    outOfRating: number;
};

const Rating: React.FC<RatingProps> = ({
    avgRating,
    outOfRating,
    ratingCount,
}) => {
    const { emptyCount, fillCount, halfCount } = calcStarsForRating(
        avgRating,
        outOfRating
    );

    const fillStars = Array.from({ length: fillCount }, (_, i) => (
        <TbStarFilled key={i} />
    ));
    const halfStars = Array.from({ length: halfCount }, (_, i) => (
        <TbStarHalfFilled key={i} />
    ));
    const emptyStars = Array.from({ length: emptyCount }, (_, i) => (
        <TbStar key={i} />
    ));

    return (
        <div className="my-2 flex items-center text-warning">
            {/* <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaRegStar className="text-lg text-yellow-400" /> */}
            {fillStars}
            {halfStars}
            {emptyStars}
            <span className="ml-2 text-lg text-foreground text-opacity-30">
                ({ratingCount})
            </span>
        </div>
    );
};

export default Rating;
