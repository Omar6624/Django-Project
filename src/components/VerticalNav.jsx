import { navigation, classNames } from "../constant";
import Frc from "../assets/images/Frc.png";

const VerticalNav = () => {
  return (
    <div className="flex flex-col sticky top-0">
      <div className="flex-1 flex flex-col  min-h-0 border-r border-gray-200 bg-gray-100">
        <div className="flex-1 flex flex-col pt-5 pb-4 ">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-30 w-auto" src={Frc} alt="Workflow" />
          </div>
          <nav className="mt-10 flex-1 " aria-label="Sidebar">
            <div className="px-2 space-y-3 m-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-300 text-green-primary scale-110 "
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-md font-medium rounded-sm  transition-transform ease-in-out delay-50 hover:scale-110  "
                  )}
                >
                  <img src={item.icon} alt="" className="w-6 h-6  pr-2  " />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;
