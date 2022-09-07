import { useEffect, useState } from 'react';
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
  const handleSearchUser = (e) => {
    let value=e.target.value;
    setSearchUsers(value); 
  };
  console.log(searchUsers);
  return (
    <>
       <input
        type="text"
        name="search"
        placeholder="Rechercher par nom"
         onChange={handleSearchUser}
      />
    <div className="basic-grid">
           {users && users.filter((value)=>{
          return value.name.toLowerCase().includes(searchUsers.toLowerCase());
           }).map((value) => (
            <div className="card" key={value.id}>
              <div className="card-header">
                <img
                  src={`https://robohash.org/${value.id}`}
                />
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
