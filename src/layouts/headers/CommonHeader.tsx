import Logo from "@/components/essentials/Logo";
import IconBdt from "@/components/icons/IconBdt";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";
import {
    TbRefresh,
    TbSearch,
    TbUser,
    TbHeart,
    TbShoppingCart,
    TbMenu2,
} from "react-icons/tb";

const CommonHeader = () => {
    return (
        <header className="bg-primary  text-primary-foreground">
            {/* logo search notification wishlist cart profile */}
            <div className="container flex flex-wrap items-center justify-between gap-10 py-3 md:flex-nowrap">
                {/* logo */}
                <Logo />

                {/* search */}
                <div className="order-last min-w-full flex-1 md:order-none md:min-w-0">
                    <SearchInput />
                </div>

                {/* bell wishlist cart */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* user */}
                    <div className="relative ">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full">
                            <TbUser />
                        </Button>
                        <div className="absolute right-0 top-0 flex h-0 w-0 items-center justify-center">
                            <Badge
                                variant="count"
                                className="absolute">
                                13
                            </Badge>
                        </div>
                    </div>

                    {/* wishlist */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full">
                            <TbHeart />
                        </Button>
                        {/* if no badge info then hide this */}
                        <div className="absolute right-0 top-0  hidden h-0 w-0 items-center justify-center">
                            <Badge
                                variant="count"
                                size="round"
                                className="absolute">
                                13
                            </Badge>
                        </div>
                    </div>
                    {/* wish end */}

                    {/* cart */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full">
                            <TbShoppingCart />
                        </Button>
                        <div className="absolute right-0 top-0 flex h-0 w-0 items-center justify-center">
                            <Badge
                                variant="count"
                                size="round"
                                className="absolute">
                                13
                            </Badge>
                        </div>
                    </div>
                    <p className="ml-5  hidden text-xs md:grid">
                        Your Cart
                        <span className="flex items-center gap-1">
                            <IconBdt />
                            <span className=" text-base">2,650.59</span>
                        </span>
                    </p>
                </div>
            </div>

            {/* divider */}
            <div className="border-b"></div>

            {/* all categories menu recently viewed */}
            <div className="container flex gap-10 py-2">
                {/* browse category menu */}
                <div className="flex items-center  rounded-primary bg-accent p-2 text-sm uppercase text-accent-foreground">
                    <TbMenu2 size={15} />
                    <p className="mx-3 hidden font-bold md:block">
                        Shop By Category
                    </p>
                </div>
                {/* browse category menu end */}

                <p className="flex items-center gap-3 text-sm">
                    <span className="text-lg">
                        <BsLightningCharge />
                    </span>
                    <span className="hidden md:inline-block">Deals Today</span>
                </p>

                <p className="flex items-center gap-3 text-sm">
                    <span className="text-lg">
                        <IoMdPricetag />
                    </span>
                    <span className="hidden md:inline-block">
                        Special Prices
                    </span>
                </p>
                <p className="ml-auto flex items-center gap-3 text-sm">
                    <span className="text-lg">
                        <TbRefresh />
                    </span>
                    <span className="hidden md:inline-block">
                        Recently Viewed
                    </span>
                </p>

                {/* recently viewed */}
                {/* recently viewed end */}
            </div>
        </header>
    );
};

const SearchInput = () => {
    const [isDirty, setIsDirty] = useState(false);
    const ref = useClickOutside(() => {
        setIsDirty(false);
    });
    const onClick = () => setIsDirty(true);

    return (
        <div
            ref={ref}
            className={cn(
                "flex flex-1 rounded-primary ",
                isDirty ? "ring-1 ring-primary ring-offset-1" : ""
            )}>
            <Input
                onFocus={onClick}
                className="w-full rounded-s-primary py-3"
                defaultValue="Search here"
            />
            <Button
                variant="submit"
                className="rounded-e-primary rounded-s-none bg-input">
                <TbSearch />
            </Button>
        </div>
    );
};

export default CommonHeader;
