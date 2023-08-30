import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
const FeedbackCard = () => {
    return (
        <div className="h-[336px] w-[428px] rounded-lg border p-4 shadow">
            <div className="flex justify-between gap-4">
                <div>
                    <img
                        src="https://i.ibb.co/MNV6LY6/Rectangle-1169.png"
                        alt=""
                    />
                </div>
                <div className="flex gap-1">
                    <FaStar className="text-2xl text-yellow-400" />
                    <FaStar className="text-2xl text-yellow-400" />
                    <FaStar className="text-2xl text-yellow-400" />
                    <FaStarHalfStroke className="text-2xl text-yellow-400" />
                    <FaStarHalfStroke className="text-2xl text-yellow-400" />
                </div>
            </div>
            <div className="my-4">
                <h1 className="text-lg font-bold">Floyid Miles</h1>
                <small>Founder, Unimart</small>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    velit convallis lectus vel fames varius viverra risus
                    imperdiet. Urna, elementum bibendum amet diam habitant. Non
                    velit convallis lectus vel fames varius viverra risus
                    imperdiet. Urna, elementum bibendum amet diam habitant.{" "}
                </p>
            </div>
        </div>
    );
};

export default FeedbackCard;
