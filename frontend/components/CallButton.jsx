import * as React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

// Icons
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function CallButton(props) {
  if (props.size == "sm") {
    return (
      <Link href="tel:+6785083343" sx={{ textDecoration: "none", color: "inherit" }} passHref>
        <Button variant="contained" >
          <PhoneInTalkIcon/>
          Call
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href="tel:+6785083343" sx={{ textDecoration: "none", color: "inherit" }} passHref>
        <Button variant="contained" sx={{ marginTop: "5px" }}>
          <PhoneInTalkIcon/>
          Call or text to book:
          (678)-508-3343
        </Button>
      </Link>
    );
  }
}
