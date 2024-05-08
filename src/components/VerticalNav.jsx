import { navigation, classNames } from "../constant";

const VerticalNav = () => {
  return (
    <div className="flex flex-col w-64">
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-30 w-auto" src="/Frc.png" alt="Workflow" />
          </div>
          <nav className="mt-10 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-md font-medium rounded-md  "
                  )}
                >
                  {item.name}
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
