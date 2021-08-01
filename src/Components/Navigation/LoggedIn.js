import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { Avatar, Button, Typography, Box } from '@material-ui/core'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
      <Avatar><PersonOutlineRoundedIcon /></Avatar>      
        <Box textAlign="center" className="ml-4">
          <Typography>{user.name}</Typography>
        </Box>
      </div>
      {/* <Box textAlign="center" m={2}>
        <Button variant="contained" onClick={() => dispatch(logOut())}>Logout</Button>
      </Box> */}
    </>
  );
}
