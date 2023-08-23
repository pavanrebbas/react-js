import { Best_Offer_Img } from "../utilities/constantURL.js"

const BestOffers = (props) => {
    const { bestoff } = props
    // console.log(bestoff)
    return (
        <img src={
            Best_Offer_Img + bestoff.Img

        } width={"100%"} />
    )
};

export default BestOffers;

