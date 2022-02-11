import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import TextField from "@mui/material/TextField";

function SignIn() {
  return (
    <>
      <div className="mgrLef">
        <LockOutlinedIcon />
        <p>Sign in</p>
        <TextField
          id="outlined-basic"
          label="Email Address*"
          variant="outlined"
        />
      </div>
    </>
  );
}

export default SignIn;
