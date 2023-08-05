
import {useEffect,useState} from 'react'
import UserItem from './UserItem';

import httpclient from '../apiclient/httpclient'
const UserSearchApp = () =>{
    const [users,setProducts] = useState([]);
    const [filteredUsers,setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
//const [show,setShow] = useState(false);
    useEffect(() => {
        const fetchUsers=async()=>{
          const response=await httpclient.get('http://localhost:9999/users');
        setProducts(response);
        setFilteredUsers(response);
        }
        fetchUsers()
        
    },[])



    const userList=filteredUsers.map((user)=>(
        <UserItem key={user.userId} user={user} />
    ))
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
   
    const handleFilterClick = () => {
        const filteredResults = users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredResults);
        setShowInfo(true);
      };
    

    return (

        <div className="panel-group">

<div className='panel panel-primary'>

<div className="panel panel-header">

Users List

</div>







<div className='panel-body'>

<div className='row'>

<div className='col-md-2'>Search by Name:</div>

<div className='col-md-4'>

<input type='text' onChange={handleInputChange} />
<button className="btn btn-primary" onClick={handleFilterClick} >Search</button>



</div>

</div>

<div className='table-responsive'>
<table className="table">
<thead className="table-dark">
<tr>

<th>UserName</th>
<th>Email</th>
<th>Street</th>
<th>City</th>
<th>ZipCode</th>


</tr>

</thead>
{showInfo &&
<tbody>
{userList}
</tbody>
}
</table>
</div>
</div>
</div>
</div>

    )

}
export default UserSearchApp

