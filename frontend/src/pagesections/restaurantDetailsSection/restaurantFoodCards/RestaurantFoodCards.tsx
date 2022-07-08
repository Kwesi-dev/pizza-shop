import OfferCard from "../../../components/offerCard/OfferCard"
import FoodCardH from "../../../components/restFoodCard/FoodCardH"
import "./restaurantFoodCards.scss"
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
type cardstype = {
    id : number
}
const card: cardstype[]= [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
    {
        id: 13,
    },
    {
        id: 14,
    },
    {
        id: 15,
    },
    {
        id: 16,
    },
    {
        id: 17,
    },
    {
        id: 18,
    },
    {
        id: 19,
    },
    {
        id: 20,
    },
    {
        id: 21,
    },
    {
        id: 22,
    },
    {
        id: 23,
    },
    {
        id: 24,
    },
    {
        id: 25,
    },
    {
        id: 26,
    },
    {
        id: 27,
    },
]

const RestaurantFoodCards = () => {
  const itemsPerPage = 12
  const [currentItems, setCurrentItems] = useState<cardstype[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(card.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(card.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number}) => {
    const newOffset = (event.selected * itemsPerPage) % card.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="restaurantFoodCards">
        <div className="restaurantFoodCards-wrapper">
            <div className="second-grid">
                {
                    currentItems.map((c)=>
                        <OfferCard/>
                    )
                }
            </div>
            {/* <div className="first-grid">
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
            </div> */}
            <ReactPaginate
                onPageChange={handlePageClick}
                breakLabel="..."
                nextLabel={<ChevronRight className="next-button"/>}
                pageRangeDisplayed={3}
                previousLabel={<ChevronLeft className="prev-button"/>}
                pageCount={pageCount}
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