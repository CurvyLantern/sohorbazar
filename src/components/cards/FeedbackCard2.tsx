import { FaStar } from "react-icons/fa6";
const FeedbackCard2 = () => {
    return (
        <div className="h-[281px] w-[428px] rounded-lg border p-6 shadow">
            <div className="flex gap-4">
                <div>
                    <img
                        src="https://i.ibb.co/MNV6LY6/Rectangle-1169.png"
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="text-lg font-bold">Floyid Miles</h1>
                    <small>Founder, Unimart</small>
                    <div className="my-1 flex gap-1">
                        <FaStar className="text-xs text-yellow-500" />
                        <FaStar className="text-xs text-yellow-500" />
                        <FaStar className="text-xs text-yellow-500" />
                        <FaStar className="text-xs text-yellow-500" />
                        <FaStar className="text-xs text-yellow-500" />
                    </div>
                </div>
            </div>
            <p className="my-6 text-sm">
                Mega Dhaka is a sit amet, consectetur adipiscing elit. Non velit
                convallis lectus vel fames varius viverra risus imperdiet. Urna,
                elementum bibendum amet diam habitant. Non velit convallis
                lectus vel fames varius viverra risus imperdiet. Urna, elementu
                be habitant.
            </p>
        </div>
    );
};

export default FeedbackCard2;
