import PaymentMerchant1 from "@/assets/payment_merchants.png";
const contactUsOptions = {
    name: "যোগাযোগ করুন",
    phone: "01234-56789",
    email: "support@shohorbazar.com",
    address: `ঢাকা  1212, বাংলাদেশ`,
    workTime: "শনি-বৃহস্পতি সকাল 9AM - 9PM",
};
const footerMenus = [
    {
        name: "কোম্পানি তথ্য",
        menus: [
            {
                name: "শহর বাজার সম্পর্কে",
                href: "#",
            },
            {
                name: "ক্যারিয়ার",
                href: "#",
            },
            {
                name: "ব্লগ",
                href: "#",
            },
            {
                name: "যোগাযোগ করুন",
                href: "#",
            },
            {
                name: "আমাদের ঠিকানা",
                href: "#",
            },
        ],
    },
    {
        name: "নীতি",
        menus: [
            {
                name: "ফেরত / বাতিল করন",
                href: "#",
            },
            {
                name: "ক্রেডিট পলিসি",
                href: "#",
            },
            {
                name: "সুরক্ষা নীতি",
                href: "#",
            },
            {
                name: "শর্তাবলী",
                href: "#",
            },
            {
                name: "কপিরাইট",
                href: "#",
            },
        ],
    },
];

const CommonFooter = () => {
    return (
        <footer className="bg-background text-foreground/70">
            <section className="container grid grid-cols-1 py-16 md:grid-cols-2 lg:grid-cols-4">
                {/* contact us */}
                <article className="flex">
                    <div className="w-3/5">
                        <header className="flex">
                            <h3 className="py-2 text-lg font-semibold capitalize">
                                {contactUsOptions.name}
                            </h3>
                        </header>
                        <ul className="mb-6 flex flex-col gap-2 py-2 text-sm">
                            <div className="mb-6 flex flex-col gap-2 text-foreground/60">
                                <li>
                                    <a
                                        className="text-2xl font-bold text-warning"
                                        href={`tel:${contactUsOptions.phone}`}>
                                        {contactUsOptions.phone}
                                    </a>
                                </li>
                                <li>{contactUsOptions.workTime} </li>
                            </div>
                            <li>{contactUsOptions.address} </li>
                            <li>
                                <a href={`mailto:${contactUsOptions.email}`}>
                                    যোগাযোগ : {contactUsOptions.email}
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
                                    <h3 className="py-2 text-lg font-semibold capitalize">
                                        {footerMenu.name}
                                    </h3>
                                </header>
                                <ul className="mb-6 flex flex-col gap-2 py-2 text-sm text-foreground/60">
                                    {footerMenu.menus.map((menu, menuIdx) => {
                                        return (
                                            <li
                                                key={menuIdx}
                                                className="text-sm">
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

                <article className="flex flex-col gap-4">
                    <div>
                        <h3 className="py-2 text-lg font-semibold capitalize">
                            ক্যাশব্যাক রিওয়ার্ডস
                        </h3>
                        <a
                            href="#"
                            className="text-sm text-foreground/60">
                            শর্তাবলী
                        </a>
                    </div>
                    <div>
                        <h3 className="py-2 text-lg font-semibold capitalize">
                            অংশীদার সম্পর্ক
                        </h3>
                        <a
                            href="#"
                            className="text-sm text-foreground/60">
                            বিনিয়োগকারী শর্তাবলী
                        </a>
                    </div>

                    <div>
                        <h3 className="py-2 text-lg font-semibold capitalize">
                            পেমেন্ট অপশন
                        </h3>
                        <img
                            src={PaymentMerchant1}
                            alt=""
                        />
                    </div>
                </article>
                {/* join with us end */}
            </section>

            <div className="border-t"></div>

            <div className="container  p-4 text-center text-sm">
                Copyright &copy; 2023 - Shohorbazar.com Ltd. All rights reserved
            </div>
        </footer>
    );
};

export default CommonFooter;
