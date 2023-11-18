import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { logOutAction } from "../../store/auth/action";
import DebounceComponent from "../../components/DebounceComponent";
import ThrottleComponent from "../../components/ThrottleComponent";

const Home = () => {
  const user = useSelector((state) => state?.auth?.user);

  const dispatch = useDispatch();

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction()) }/>
      <div className="max-w-sm border rounded my-5 mx-auto">
        <h2 className="text-center text-xl p-5">Debouncing</h2>
        <DebounceComponent />
      </div>

      <div className="max-w-sm border rounded my-5 mx-auto">
        <h2 className="text-center text-xl p-5">Throttling</h2>
        <ThrottleComponent />
      </div>
    </>
  );
};

export default Home;
