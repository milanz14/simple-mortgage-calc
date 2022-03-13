import React from "react";
import { Box } from "@mui/material";

function MonthlyPayment(props) {
    const { monthlyAmount } = props;
    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            {isNaN(monthlyAmount) ? (
                <>
                    <h2>
                        Please ensure you complete all fields before
                        calculating.
                    </h2>
                </>
            ) : (
                <>
                    <h2>Payment</h2>
                    <p>You'll be paying: </p>
                    <Box mb={3}>$ {monthlyAmount} each month.</Box>
                </>
            )}
        </Box>
    );
}

export default MonthlyPayment;
