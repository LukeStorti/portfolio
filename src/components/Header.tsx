import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = ({}: {}) => {
  return (
    <header className="flex justify-between p-4 items-center h-14">
      <Logo title="Luke Storti Dev" />
      <Nav />
      <MobileNav />
    </header>
  );
};

export default Header;
