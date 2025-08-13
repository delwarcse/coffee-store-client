import { Outlet } from "react-router";
import Header from "./Header";

const LayOut = () => {
    return (
        <div className="mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;