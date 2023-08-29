import Logo from "@/components/essentials/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Phone,
    Truck,
    Bell,
    Heart,
    ShoppingCart,
    User,
    Menu,
    ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MainMenu from "@/components/essentials/MainMenu";

const CommonHeader = () => {
    return (
        <header>
            {/* phone number track order login register */}
            <div className="container flex items-center border-b border-input py-2">
                {/* number */}
                <a
                    href="tel:+8801608332564"
                    className="flex items-center gap-2 text-xs font-semibold ">
                    <Phone size={15} />
                    <span>+8801608-332564</span>
                </a>

                {/* order track */}
                <Link
                    to=""
                    className="ml-auto flex items-center gap-2 text-xs font-semibold">
                    <Truck size={15} />
                    <span>Track My Order</span>
                </Link>

                <div className="ml-10 flex items-center gap-3">
                    {/* login button */}
                    <Link to="/login">
                        <Button variant="outlinePrimary">Login</Button>
                    </Link>
                    {/* register button */}
                    <Link to="/signup">
                        <Button className="">Sign Up</Button>
                    </Link>
                </div>
            </div>

            {/* logo search notification wishlist cart profile */}
            <div className="container flex items-center py-9">
                {/* logo */}
                <Logo />

                {/* search */}
                <SearchInput />

                {/* bell wishlist cart */}
                <div className="flex items-center gap-3">
                    {/* bell */}
                    <div className="relative">
                        <Button
                            variant="ghostVisible"
                            size="icon"
                            className="rounded-full">
                            <Bell size={12} />
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
                    {/* bell end */}

                    {/* wishlist */}
                    <div className="relative">
                        <Button
                            variant="ghostVisible"
                            size="icon"
                            className="rounded-full">
                            <Heart size={12} />
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
                            variant="ghostVisible"
                            size="icon"
                            className="rounded-full">
                            <ShoppingCart size={12} />
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
                    {/* cart end */}

                    {/* user */}
                    <div className="relative ml-5">
                        <Button
                            variant="ghostVisible"
                            size="icon"
                            className="rounded-full">
                            <User size={12} />
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
                    {/* cart end */}
                </div>
            </div>

            {/* all categories menu recently viewed */}
            <div className="container flex">
                {/* browse category menu */}
                <div className="flex items-center  gap-2 bg-primary p-2 text-sm uppercase text-primary-foreground">
                    <Menu size={15} />
                    <p className="mr-14">Browse categories</p>
                    <ChevronDown size={15} />
                </div>
                {/* browse category menu end */}

                {/* menu */}
                <MainMenu />
                {/* menu end */}

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
                "ml-auto mr-auto flex rounded-primary",
                isDirty ? "ring-1 ring-primary ring-offset-1" : ""
            )}>
            <Input
                onFocus={onClick}
                className="w-96 rounded-s-primary py-3"
                defaultValue="Search here"
            />
            <Button className="rounded-e-primary rounded-s-none">Search</Button>
        </div>
    );
};

export default CommonHeader;
