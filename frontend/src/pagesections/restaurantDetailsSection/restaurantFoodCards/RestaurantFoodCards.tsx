import OfferCard from "../../../components/offerCard/OfferCard"
import FoodCardH from "../../../components/restFoodCard/FoodCardH"
import "./restaurantFoodCards.scss"
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const RestaurantFoodCards = () => {
  return (
    <section className="restaurantFoodCards">
        <div className="restaurantFoodCards-wrapper">
            <div className="first-grid">
                <FoodCardH/>
                <FoodCardH/>
            </div>
            <div className="second-grid">
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
            <div className="first-grid">
                <FoodCardH/>
                <FoodCardH/>
            </div>
            <div className="second-grid">
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ChevronRight className="next-button"/>}
                pageRangeDisplayed={3}
                previousLabel={<ChevronLeft className="prev-button"/>}
                pageCount={12}
                containerClassName="pagination-container"
                previousClassName="previous-li"
                nextClassName="next-li"
                previousLinkClassName="previous-a"
                nextLinkClassName="next-a"
                pageClassName="page-li page-active"
                pageLinkClassName="page-a"
                breakClassName="elipsis-li"
                breakLinkClassName="elipsis-a"
                activeClassName="active-page"
                activeLinkClassName="active-a"
            />
        </div>
    </section>
  )
}

export default RestaurantFoodCards