import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const ReasturantCards = (props) => {
    // constant name should be same as the prop we are passing in component.
    const{resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo } = resData?.info
    const{ slaString } = resData.info?.sla
    // props.resName this also we can use in code if we will not define constant
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+ cloudinaryImageId}></img>
            <h3> {name}</h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating } Stars </h4>
            {/** we can also access data like this resData.info.costForTwo if will not create constant for it */}
            <h4> {costForTwo } </h4>
            <h4> {slaString} </h4>

        </div>
    )  
}

export default ReasturantCards;