import { TbBusOff } from "react-icons/tb";
import LoginForm from "./components/login/page";
export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="w-[40%]  flex items-center  h-screen">
        <LoginForm />
      </div>

      <div className="w-[50%] rounded-bl-[150PX] min-h-screen bg-orange-600 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-10">
          <div className="mb-6">
            <div className="flex items-center gap-1">
              <span>
                <TbBusOff className="w-16 h-9 text-white" />
              </span>
              <span className="w-32 rounded-md pl-10 pr-5 pt-1 h-8 border border-white bg-orange-600 text-white">
                Spark
              </span>
            </div>
          </div>
          <span className="w-full lg:w-auto lg:max-w-xs mt-7 text-center rounded-md border border-orange-300 bg-orange-600 text-white px-4 py-3">
            <p className="mb-1">Learn more about Air Drive on</p>
            <h1 className="text-lg">Spark</h1>
          </span>
        </div>
        <div className="flex justify-center items-end gap-2 lg:gap-10 text-white">
          <button className="focus:outline-none">License</button>
          <button className="focus:outline-none">Terms of Use</button>
          <button className="focus:outline-none">Blogs</button>
        </div>
      </div>
    </main>
  );
}
