import { Search, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-blue-600">What a Market!</h1>
            <Button variant="outline">Categories</Button>
          </div>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="DJI phantom"
                className="w-full pl-10 pr-4"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Orders</Button>
            <Button variant="ghost">
              <Heart size={20} />
            </Button>
            <Button variant="ghost">
              <ShoppingCart size={20} />
            </Button>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
