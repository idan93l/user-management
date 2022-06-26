import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import TableRow from "@mui/material/TableRow";
import ToggleActivity from "../ToggleActivity/ToggleActivity";

export default function User({ user }) {
  const { _id, isActive, name, company, address } = user;
  const { first, last } = name;
  const [activity, setActivity] = useState(isActive);
  const [digestValue, setDigestValue] = useState([]);
  const navigate = useNavigate();

  const getdigestValue = async () => {
    const { data } = await axios(
      `https://api.hashify.net/hash/md4/hex?value=${first + last}`
    );
    setDigestValue(data.Digest);
  };

  const handleActivity = async (boolean) => {
    try {
      await axios.post(`http://localhost:3001/${_id}`, { isActive: boolean });
      setActivity(boolean);
    } catch (err) {
      console.log(err);
    }
  };

  const addressFilter = (address) => {
    const addressToArray = address.split(",");
    const filteredAddress = [addressToArray[1], addressToArray[2]]
    return filteredAddress.join(", ")
  }

  useEffect(() => {
    getdigestValue();
  }, []);

  return (
    <TableRow onDoubleClick={() => navigate(`/customer/${_id}`)}>
      <TableCell>
        <ToggleActivity
          activity={activity}
          setActivity={setActivity}
          handleActivity={handleActivity}
        />
      </TableCell>
      <TableCell>{first}</TableCell>
      <TableCell>{last}</TableCell>
      <TableCell>{company}</TableCell>
      <TableCell>{addressFilter(address)}</TableCell>
      <TableCell>{digestValue}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}
