import ReasturantCards from "./ReasturantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const  Body =() =>{
    //Local State Variable super powerful variable
    const[Reastaurant,setReastaurant] = useState([]);
    const[searchInput,setSearchInput] = useState("");
    const[filteredReastaurant,setFilteredReastaurant] = useState([]);
    useEffect( () => { fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1");
        const json = await data.json();
        console.log(json);
        setReastaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredReastaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    // if( Reastaurant.length === 0 ){
    //     return <Shimmer />;
    // }
    return Reastaurant.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-input" value={searchInput} onChange={ (e) => {
                        setSearchInput(e.target.value);
                    }}></input> 
                    <button className="search-btn" onClick={() => {
                       const filteredReastaurant = Reastaurant.filter( (res) =>  res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                       setFilteredReastaurant(filteredReastaurant);
                       setSearchInput(searchInput);
                    }}>Search</button>

                </div>
                <div className="top-rated-reasturant">
                    <button className="filter-btn" onClick={ () => {
                    const filteredReastaurant = Reastaurant.filter( 
                        (res) => res.info.avgRating > 4 
                    );
                    setReastaurant(filteredReastaurant);
                    }}
                    >
                        Top Rated Reasturant
                    </button>
                </div>
           
            </div>
            <div className="res-container">
                {filteredReastaurant.map( (restaurant ) => (
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