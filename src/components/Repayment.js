import React from "react";
import { Slider, Box } from "@mui/material";

function Repayment(props) {
    const { repay, repaymentTime } = props;
    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            <h2>Repayment</h2>
            <p>How long is your mortgage?</p>
            <label htmlFor="repayment"></label>
            <Slider
                type="range"
                id="repayment"
                name="repayment"
                min={1}
                max={25}
                step={1}
                value={repaymentTime}
                onChange={(e) => repay(e.target.value)}
                sx={{
                    width: 300,
                    color: "#5D3FD3",
                }}
            />
            <Box mb={3}>
                {repaymentTime} years ({repaymentTime * 12}) months
            </Box>
        </Box>
    );
}

export default Repayment;
