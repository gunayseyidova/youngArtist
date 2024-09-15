import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";
import AnimatedReveal from "./AnimationComponent";
import FavoriteButton from "./FavoriteButton";
import { Search } from "lucide-react";

const Navbar = () => {
   return (
      <header className="h-[105px]">
         <div className="fixed top-0 z-50 w-full border-b border-b-black bg-background/60 py-[20px] backdrop-blur">
            <AnimatedReveal distance={0} delay={0.3} blur="6px">
               <div className="container flex items-center justify-between h-16">
                  {/* logo */}
                  <Link to="/" className="flex flex-col text-xl font-bold l header_link md:text-3xl">
                     <h1> Young Artists Hub</h1>
                     <span className="flex items-center gap-x-[10px] leading-[30px] text-[13px]">
                        Baku <span className="block h-[20px] w-[2px] bg-black"></span> Azerbaijan
                     </span>
                  </Link>

                  {/* navitems */}
                  <nav className="items-center hidden h-full gap-6 md:flex">
                     {navlinks.map((link) => (
                        <NavLink
                           key={link.name}
                           to={link.path}
                           className={({ isActive }) =>
                              cn("relative flex h-full items-center", {
                                 "font-bold hover:text-foreground": isActive,
                              })
                           }
                        >
                           {({ isActive }) => (
                              <>
                                 {link.name}
                                 {isActive && (
                                    <motion.span
                                       className="absolute rounded-md -inset-x-2 inset-y-4"
                                       layoutId="nav-item"
                                       transition={{
                                          duration: 0.3,
                                          type: "tween",
                                       }}
                                    />
                                 )}
                              </>
                           )}
                        </NavLink>
                     ))}
                  </nav>

                  {/* login register */}
                  <div className="flex items-center gap-3">
                     {/* auth button */}
                     <div className="mr-[44px] hidden gap-2 gap-x-[14px] text-[16px] font-[500] md:flex">
                        <Link className="block bg-black p-[16px] text-white" to="/login">
                           Qeydiyyat
                        </Link>

                        <Link
                           className="border border-black p-[16px] text-black transition-all hover:bg-black hover:text-white"
                           to="/register"
                        >
                           Daxil ol
                        </Link>
                     </div>

                     {/* shoping button */}
                     <Search className="cursor-pointer" />
                     <FavoriteButton />
                     <CartSheet />

                     {/* mobile nav */}
                     <MobileNav />
                  </div>
               </div>
            </AnimatedReveal>
         </div>
      </header>
   );
};

export default Navbar;
