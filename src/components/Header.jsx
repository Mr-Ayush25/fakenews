const Header = () => {
  return (
    <header className="bg-black/40 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <span className="text-beige-500">Fake</span> News
        </div>

        {/* Navigation */}
        <ul className="flex space-x-8 text-lg">
          <li className="text-beige-500 border-b-2 border-beige-500 pb-1">
            Home
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
