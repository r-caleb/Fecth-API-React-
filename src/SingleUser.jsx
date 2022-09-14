import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const SingleUser = () => {
const {id} = useParams();
  const [user, setUser] = useState([]);
    const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then((data) => {
        data.map((item) => {
          if (item.id == id) {
            setUser(item);
          }
        });
      })
      .catch((er) => console.log(er));
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
   <div className="single-robot">
      <Link to="/" className="back"> {`< Back To Users`}</Link>
      <table border={1}>
        <tr>
          <td colSpan={2}>
            <img
              src={`https://robohash.org/${user.id}`}
            />
          </td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Website</td>
          <td>{user.website}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{user.phone}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>
            {user?.company?.name},{user?.company?.catchPhrase},
            {user?.company?.bs}
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            {user?.address?.street},{user?.address?.city},{' '}
            {user?.address?.suite}, {user?.address?.zipcode}
          </td>
        </tr>
      </table>
    </div>
  );
}
export default SingleUser;