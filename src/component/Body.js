import ReasturantCards from "./ReasturantCards";
import { resList } from "../utils/mockData";
import { useState } from "react";


const  Body =() =>{
    //Local State Variable super powerful variable
    const[Reastaurant,setReastaurant] = useState(resList);

    return(
        <div className="body">
            <div className="filter"><button className="filter-btn" onClick={ () => {
              const filteredReastaurant = Reastaurant.filter( 
                (res) => res.info.avgRating > 4 
            );
              setReastaurant(filteredReastaurant);
            }}
            >
                Top Rated Reasturant
            </button>
            </div>
            <div className="res-container">
                {Reastaurant.map( (restaurant ) => (
                    /**to fix warning unique key prop need for each list item will add key property in component */
                    <ReasturantCards key={restaurant.info.id} resData={restaurant}/> 
                ))}
                {/** in below we are accessing single data from resList array*/}
                {/* <ReasturantCards resData = {resList[0]} /> */}
                {/* <ReasturantCards resName="Meghna Foods" cuisines="Biryani,North Indian,Asian"/>
                <ReasturantCards resName="KFC" cuisines="Burger,Fries,Cold drinks, Fast Food"/>
                <ReasturantCards resName="Frozen Bottle" cuisines="Milkshakes,Icecream, Pasteries"/> */}

            </div>

        </div>
    )
}

export default Body;