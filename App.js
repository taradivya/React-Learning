import React from "react";
import ReactDOM from "react-dom/client";
//If we have multiple lines of html code
/* <div id = "paret">
    <div id ="child1">
        <h1>
            I am h1 tag
        </h1>
        <h2>
            I am h2 tag
        </h2>
    </div>
    <div id="child2">
        <h1>
            I am h1 tag
        </h1>
        <h2>
            I am h2 tag
        </h2>
    </div>
</div> 
*/

 //ReactElement(object) => HTML(Browser Understand)

// const heading = React.createElement("div", {id:"parent"}, [ React.createElement("div", {id:"child1"},[ React.createElement("h1",{},"Iam h1 tag"), React.createElement("h2",{},"Iam h2 tag") ] ),React.createElement("div", {id:"child2"},[ React.createElement("h1",{},"Iam h1 tag"), React.createElement("h2",{},"I am h2 tag") ] ) ] );
// Instead of using multiple createElement api to create element we can make use of JSX

//react.createElement() =>ReactElement(object) =>HTMLElement(render)
//const heading = React.createElement("h1",{id:"heading", attr:"xyz" },"Hello React");

//JSX => React.createElement=>ReactElement(object) =>HTMLElement(render)

//const jsxheading = <h1 id="heading" className="heading" tabIndex="1">Namaste react</h1>

//React Functional Component
//react component should start with capital letter
const Title = () => ( 
    <h1 className="title"> 
    Namaste react title 
    </h1>
);

const HeadingComponent = () =>{
    return <h1>This is functional component </h1>;
}
//OR if we returning single line then we can also write it as
//react element inside react element
const title2=(<h1>Title 2 </h1>);
const title1 =(<h1>Tilte of react { title2 }</h1>);
//react element inside react component 
const HeadingComponent2 = () => (
    <div id="head">
        <Title/>
        {console.log('xyz')} 
        {title1}
        <h1>THis is functional component </h1>
    </div>
);

//react component inside react element

const titletest = (
     <div>
        <h1> Hello {title1} </h1> 
        <HeadingComponent2/> 
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// to render component syntax will be
root.render(titletest)
//root.render(jsxheading);

