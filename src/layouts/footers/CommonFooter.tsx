import PaymentImg from "@/assets/payment.png";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Send } from "lucide-react";
const footerMenus = [
  {
    name: "Contact us",
    menus: [
      {
        name: "01608-332564",
        href: "tel:01608332564",
      },
      {
        name: "Service Hour 24/7",
        href: "#",
      },
      {
        name: "contact@megadhaka.com",
        href: "#",
      },
      {
        name: `House 37, Road 18, Sector 11,
        Uttara, Dhaka-1230, Bangladesh`,
        href: "#",
      },
    ],
  },
  {
    name: "Useful Info",
    menus: [
      {
        name: "My Account",
        href: "tel:01608332564",
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
    <footer className="bg-foreground text-background">
      <section className="container grid grid-cols-4 py-16">
        {/* contact us */}
        {footerMenus.map((footerMenu, footerMenuIdx) => {
          return (
            <article key={footerMenuIdx} className="flex">
              <div className="w-3/5">
                <header className="flex">
                  <h3 className="border-b-2 py-2 capitalize">
                    {footerMenu.name}
                  </h3>
                </header>
                <ul className="flex flex-col gap-2 py-5 text-sm ">
                  {footerMenu.menus.map((menu, menuIdx) => {
                    return (
                      <li key={menuIdx}>
                        <a href={menu.href}>{menu.name}</a>
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
          <header className="flex">
            <h3 className="py-2 text-lg font-semibold capitalize">
              Join With Us
            </h3>
          </header>

          <p className="text-xs">
            sign up to get our latest product updates & events
          </p>

          {/* email us */}
          <MailUs />

          {/* we accept what */}
          <p className="mt-5 py-3 uppercase">we accept</p>
          <div className="flex gap-3">
            <div className="flex-1">
              <img src={PaymentImg} alt="" />
            </div>
          </div>
        </article>
        {/* join with us end */}
      </section>
    </footer>
  );
};

const MailUs = () => {
  const [isDirty, setIsDirty] = useState(false);
  const ref = useClickOutside(() => {
    setIsDirty(false);
  });
  const onClick = () => setIsDirty(true);

  return (
    <div
      ref={ref}
      className={cn(
        "my-5 flex rounded-lg",
        isDirty ? "ring-1 ring-primary ring-offset-1" : "",
      )}
    >
      <Input
        onFocus={onClick}
        className="flex-1 rounded-s-lg py-2 "
        defaultValue="Search here"
      />
      <Button className="rounded-e-lg rounded-s-none px-4">
        Join now
        <Send size={15} className="ml-3" />
      </Button>
    </div>
  );
};

export default CommonFooter;
