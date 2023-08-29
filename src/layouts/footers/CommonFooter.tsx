const contactUsOptions = {
    name: "Contact us",
    phone: "01234-56789",
    email: "support@shohorbazar.com",
    address: `Dhaka 1212, Bangladesh`,
    workTime: "Sat-Wed 9am-9pm",
};
const footerMenus = [
    {
        name: "Company Info",
        menus: [
            {
                name: "About Shohorbazar",
                href: "#",
            },
            {
                name: "How To Order",
                href: "#",
            },
            {
                name: "Track My Order",
                href: "#",
            },
            {
                name: "Map Location",
                href: "#",
            },
            {
                name: "Sitemap",
                href: "#",
            },
        ],
    },
    {
        name: "Our Services",
        menus: [
            {
                name: "About Us",
                href: "tel:01608332564",
            },
            {
                name: "Wholesale",
                href: "#",
            },
            {
                name: "Privacy Policy",
                href: "#",
            },
            {
                name: "Terms & Conditions",
                href: "#",
            },
            {
                name: "FAQs",
                href: "#",
            },
        ],
    },
];

const CommonFooter = () => {
    return (
        <footer className="bg-background text-foreground">
            <section className="container grid grid-cols-4 py-16">
                {/* contact us */}
                <article className="flex">
                    <div className="w-3/5">
                        <header className="flex">
                            <h3 className="py-2 font-semibold capitalize">
                                {contactUsOptions.name}
                            </h3>
                        </header>
                        <ul className="flex flex-col gap-2 py-2 text-sm ">
                            <li>
                                <a
                                    className="text-2xl font-bold text-warning"
                                    href={`tel:${contactUsOptions.phone}`}>
                                    {contactUsOptions.phone}
                                </a>
                            </li>
                            <li>{contactUsOptions.workTime} </li>
                            <li>{contactUsOptions.address} </li>
                            <li>
                                <a href={`mailto:${contactUsOptions.email}`}>
                                    contact : {contactUsOptions.email}
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                </article>

                {/* useful links */}
                {footerMenus.map((footerMenu, footerMenuIdx) => {
                    return (
                        <article
                            key={footerMenuIdx}
                            className="flex">
                            <div className="w-3/5">
                                <header className="flex">
                                    <h3 className="py-2 font-semibold capitalize">
                                        {footerMenu.name}
                                    </h3>
                                </header>
                                <ul className="flex flex-col gap-2 py-2 text-sm ">
                                    {footerMenu.menus.map((menu, menuIdx) => {
                                        return (
                                            <li key={menuIdx}>
                                                <a href={menu.href}>
                                                    {menu.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </article>
                    );
                })}

                {/* join with us */}

                <article>
                    <div>
                        <h3 className="py-2 font-semibold capitalize">
                            Cashback Rewards
                        </h3>
                        <a href="#">conditions</a>
                    </div>
                    <div>
                        <h3 className="py-2 font-semibold capitalize">
                            Owners relations
                        </h3>
                        <a href="#">Buyers relations</a>
                    </div>

                    <div>
                        <h3 className="py-2 font-semibold capitalize">
                            Payment Options
                        </h3>
                        <img
                            src="#"
                            alt=""
                        />
                    </div>
                </article>
                {/* join with us end */}
            </section>

            <div className="container border-t p-4 text-center text-sm">
                Copyright &copy; 2023 - Shohorbazar.com Ltd. All rights reserved
            </div>
        </footer>
    );
};

export default CommonFooter;
