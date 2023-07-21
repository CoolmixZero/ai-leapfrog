import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {}

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button size="icon" variant="ghost" 
        className="md:hidden " 
      >
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
