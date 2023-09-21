import { Whats_On_Img } from "../utilities/constantURL";

const UserLooksFor = (props) => {
    const { food } = props;
    // console.log(food)
    return (
        <div className="UserLookFor">
            <img src={Whats_On_Img + food.imageId} width={"70%"} />
            {/*   <h5>{food.action.text}</h5> */}
        </div>
    );

}

export default UserLooksFor;