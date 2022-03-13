import React from "react";
import { Slider, Box } from "@mui/material";

function Interest(props) {
    const { interest, interestRate } = props;

    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            <h2>Interest Rate</h2>
            <p>What is your expected interest rate?</p>
            <label htmlFor="interest"></label>
            <Slider
                type="range"
                id="interest"
                name="interest"
                min={1}
                max={10}
                step={0.1}
                value={interestRate}
                onChange={(e) => interest(e.target.value)}
                sx={{
                    width: 300,
                    color: "#5D3FD3",
                }}
            />
            <Box mb={3}>{interestRate} %</Box>
        </Box>
    );
}

export default Interest;
