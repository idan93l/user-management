import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Customer() {
  const params = useParams();
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/${params.id}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>{user ? user.name.first : "loading..."}</h1>
      <Link to={"/customers"}>
        <h3>Back</h3>
      </Link>
    </div>
  );
}
