import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Nav() {
  return (
    <nav className="flex items-center justify-between bg-black text-white px-10 py-4">
      <h1 className="text-3xl font-bold font-mon"> URMV</h1>
      <div className="flex items-center space-x-3">
        <p className="text-xl font-medium">Popular</p>
        <p className="text-xl font-medium">Upcoming</p>
      </div>
      <form className="flex items-center justify-center">
        <input
          type="text"
          className="text-xl bg-transparent border-b border-b-slate-300 focus:outline-none"
        />
        <MagnifyingGlassIcon className="w-8 h-8" />
      </form>
    </nav>
  );
}

export default Nav;
