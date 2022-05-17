import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

interface props {
    t?: any;
    lang?: string;
}
export const LinkDropdown: React.FC<props> = ({ t, lang }) => {
    const [active, setActive] = useState<boolean>(false);
    const { pathname } = useRouter()
    const menuRef = useRef<any>();
    useEffect(() => {
        const listner = (e: Event) => {
            if (e.target === menuRef.current && !active) return;
            setActive((prev) => false);
        };
        document.addEventListener("click", listner);
        return () => document.removeEventListener("click", listner);
    }, []);
    return (
        <div className="relative mx-0">
            <div
                ref={menuRef}
                className={clsx("cursor-pointer  w-[fit-content] flex flex-row items-center gap-x-1 text-white mx-0", pathname.startsWith("/group") && "text-secondary-bg")}
                onClick={(e) => setActive((prev) => !prev)}
            >
                {t("group")}
                <IoMdArrowDropdown
                    style={{
                        color: "#fff",
                      
                        marginTop:"4px",
                        pointerEvents: "none",
                    }}
                />

            </div>
            {active && (
                <div
                    className={clsx(
                        "flex flex-col my-4 sm:my-0 sm:absolute top-14 bg-primary-text shadow-lg cursor-context-menu p-3 min-w-[100%] sm:min-w-[120px] gap-y-4 py-6 language-menu max-h-[200px]  z-20 sm:left-[-40px]",
                        lang === "ar" && "rtl"
                    )}
                >
                    <div
                        className="font-semibold hover:text-primary-bg cursor-pointer w-[fit-content] ltr"

                    >
                        <Link href='/group/specialone'>Special one</Link>
                    </div>
                    <div
                        className="font-semibold hover:text-primary-bg cursor-pointer w-[fit-content] ltr"

                    >
                        <Link href='/group/realestate'>Real estate</Link>
                    </div>
                </div>
            )}
        </div>
    );
};
