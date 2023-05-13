import { useRef, useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
export default function LoginTransparent() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    console.log(passwordRef.current?.value);
    // console.log(password);
  };
  return (
    <div
      className=" w-full h-full min-h-[100vh] bg-[url('./assets/reconnect_with_nature.jpg')] bg-no-repeat bg-cover bg-center
        after:absolute after:content-[''] after:top-0 after:left-0 after:bg-slate-600 after:h-full after:w-full after:opacity-80
    "
    >
      <div className="content absolute w-[370px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center py-[60px] px-[32px] bg-slate-500 bg-cover bg-opacity-40 shadow-2xl z-20">
        <header className="text-white text-5xl font-bold mb-8">
          login Form
        </header>
        <form>
          <div className="field relative h-[45px] w-full  bg-slate-50 flex items-center p-1">
            <span className="w-[40px] leading-[45px] text-[#222] text-center mx-auto ">
              <AiOutlineUser size={20} />
            </span>
            <input
              type="text"
              placeholder="Email"
              className="h-full w-full bg-transparent outline-none text-[#222]"
            />
          </div>

          <div className="field  relative h-[45px] w-full  bg-slate-50 flex items-center p-1 mt-3">
            <span className="w-[40px] leading-[45px] text-[#222] text-center mx-auto ">
              <AiOutlineLock size={20} />
            </span>
            <input
              type={`${passwordVisible ? "text" : "password"}`}
              placeholder="Password"
              className="h-full w-full bg-transparent outline-none text-[#222]"
              onChange={handlePasswordChange}
              ref={passwordRef}
            />
            {password && (
              <span
                className="text-slate-600 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {passwordVisible ? "Hide" : "Show"}
              </span>
            )}
          </div>
          <div className="text-left hover:underline my-2">
            <a href="#" className="text-white text-md font-light ">
              Forgot password
            </a>
          </div>
          <div
            className="bg-[#3498db] text-white font-light w-full p-2 cursor-pointe"
            onClick={handleSubmit}
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
}
