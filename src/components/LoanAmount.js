import React from "react";
import { Box } from "@mui/material";

function LoanAmount(props) {
    const { loanAmount } = props;
    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            <h2>Borrowing</h2>
            <p>You'll be borrowing: </p>
            <Box mb={3}>$ {loanAmount}</Box>
        </Box>
    );
}

export default LoanAmount;
