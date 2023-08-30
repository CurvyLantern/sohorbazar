
import blobSvg from "../../../assets/blob.svg";
import blobSvg1 from "../../../assets/blob1.svg";
import { Button } from "@/components/ui/button";
const NewFashion = () => {
    const svgBackground = {
        backgroundImage: `url(${blobSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "",
        // backgroundSize: "500px 500px ",
    };
    const svgBackground2 = {
        backgroundImage: `url(${blobSvg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        // backgroundSize: "500px 500px ",
    };
    return (
        <div
            className=" flex gap-6 bg-red-100"
            style={svgBackground2}>
            <div className="custom-rounded  flex-1 p-4">
                <div className="ml-8">
                    <h4 className="text-5xl">New Fashion 2023</h4>
                    <p className=" mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas fermentum lectus eleifend sagittis, vitae
                        auctor nec diam. Leo fermentum dignissim sit id. Urna
                        blandit rhoncus sagittis, pharetra tincidunt. Quis
                        sagittis morbi quam leo, quis mattis turpis sapien
                    </p>

                    <div className="mt-3 flex items-center gap-4">
                        <div className="flex">
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="13px"
                                    viewBox="0 0 384 512"
                                    fill="#818181">
                                    <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                                </svg>
                                <del className="text-gray-400"> 360</del>
                            </span>

                            <span className=" ml-3 flex items-center text-lg font-bold text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16px"
                                    viewBox="0 0 384 512"
                                    fill="#FF0000">
                                    <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                                </svg>
                                300
                            </span>
                        </div>
                        <Button>Add to cart</Button>
                    </div>

                    <p className="mt-5 text-primary">
                        *This is the product of the day. Wear soft and stay
                        fashionable.
                    </p>
                </div>
            </div>
            <div
                className="flex  flex-1 items-center justify-center"
                style={svgBackground}>
                <img
                    src="https://i.ibb.co/DQ2jBvm/Firefly-department-of-English-book-29069.jpg"
                    alt=""
                    className=" h-44 rotate-45 rounded-xl"
                />
                <img
                    src="https://i.ibb.co/DQ2jBvm/Firefly-department-of-English-book-29069.jpg"
                    alt=""
                    className=" h-44 rotate-45 rounded-xl"
                />
            </div>
        </div>
    );
};

export default NewFashion;
