//import StarRating from "./Starrating.js";
const UserItem=(props) => {
    return (
       <tr>
        {/* <td>
            {props.show ?
            <img src={props.product.imageUrl} 
            title={props.product.productName} className="avatar"
            style={{width:50,margin:2}}/> :null}
        </td> */}
        <td> {props.user.name}   </td>
        <td> {props.user.email}   </td>
        <td> {props.user.address.street}   </td>
        <td> {props.user.address.city}   </td>
        <td> {props.user.address.zipcode}   </td>
       </tr>
    )
}

export default UserItem;