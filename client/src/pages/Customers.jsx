import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function Customers({ users }) {
  const isActive = (activity) => {
    if (activity === true) {
      return "true";
    } else {
      return "false";
    }
  };

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
                <TableRow key={user._id}>
                  <TableCell>{isActive(user.isActive)}</TableCell>
                  <TableCell>{user.name.first}</TableCell>
                  <TableCell>{user.name.last}</TableCell>
                  <TableCell>{user.company}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
