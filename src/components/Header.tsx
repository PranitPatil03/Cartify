import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { logoDark } from "../assets";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Layers, ShoppingCart, User, Menu } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cartItems } = useCart();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img src={logoDark} alt="logo" className="h-8 w-auto" />
            <p className="font-mono text-2xl font-medium">cartify</p>
          </div>

          <div className="flex-grow hidden md:flex justify-center p-5">
            <Input
              type="text"
              placeholder="Search a product..."
              className="w-5/6"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavItem icon={<Layers size={20} />} text="Orders" link="orders" />
            <NavItem
              icon={<ShoppingCart size={20} />}
              text={`Cart (${cartItems.length})`}
              link="cart"
            />
            <Button>
              <User size={20} className="mr-2" />
              Profile
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 gap-3">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full mb-2"
            />
            <NavItem icon={<Layers size={20} />} text="Orders" link="orders"/>
            <NavItem
              icon={<ShoppingCart size={20} />}
              text={`Cart (${cartItems.length})`}
              link="cart"
            />
            <Button className="font-mono">
              <User size={20} className="mr-2" />
              Profile
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  link?: string;
};

const NavItem = ({ icon, text, link }: NavItemProps) => (
  <Link
    to={`/${link}`}
    className="flex items-center text-gray-600 text-gray-900"
  >
    {icon}
    <span className="ml-1 font-mono">{text}</span>
  </Link>
);
