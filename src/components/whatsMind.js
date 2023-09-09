import { Whats_On_Img } from "../utilities/constantURL";

const UserLooksFor = (props) => {
    const { food } = props;
    // console.log(food)
    return (
        <div className="UserLookFor">
            <img src={Whats_On_Img + food.foodImgId} width={"100%"} />
            {/* <h5>{food.foodItemName}</h5> */}
        </div>
    );

}

export default UserLooksFor;