import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";


const AppLayout = () => {
    return (
        <div className="container">
            <Header/>
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// to render component syntax will be
root.render(<AppLayout />)

