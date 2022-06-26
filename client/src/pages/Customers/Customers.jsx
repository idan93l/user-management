import React from "react";
import { Outlet } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import User from "../../components/User/User";

export default function Customers({ users }) {
  return (
    <div>
      <TableContainer component = { Paper } sx = {{ maxHeight: '100vh' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Activity</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>City, State</TableCell>
              <TableCell>Digest Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <User key={user._id} user={user} />
              );
            })}
            <Outlet/>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
