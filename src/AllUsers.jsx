import { useEffect, useState } from 'react';
import Research from "./Research"

const AllUsers = () => {
 const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("")

  const fetchData = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, []);
  
  return (
   <>
       <Research value={searchUsers} onChange={setSearchUsers}/>
       <div className="basic-grid">
        {users && users.filter(value=>searchUsers.length>2?value.name.toLowerCase().includes(searchUsers.toLowerCase()):true).map((value) => (
         <div className="card" key={value.id}>
            <div className="card-header">
              <img src={`https://robohash.org/${value.id}`}/>
            </div>
            <div className="card-body">
                <div className="name">{value.name}</div>
                <div className="email">{value.email}</div>
            </div>
          </div>
          ))}
      </div>
    </>
    )
}
export default AllUsers;
