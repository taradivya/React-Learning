
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

const heading = React.createElement("h1",{
    id:"heading", attr:"xyz"
},"Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);