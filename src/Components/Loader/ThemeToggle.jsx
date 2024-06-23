import { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../AuthProvider/ThemeProvider";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-400"
      } relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        onClick={toggleTheme}
        className={`${
          enabled ? "translate-x-9" : "translate-x-1"
        }  h-6 w-6 transform bg-white rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center`}
      >
        {enabled ? (
          <FiMoon className="text-blue-600" />
        ) : (
          <FiSun className="text-yellow-400" />
        )}
      </span>
    </div>
  );
};

export default ThemeToggle;
