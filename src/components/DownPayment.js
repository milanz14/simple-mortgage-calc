import React from "react";
import { Slider, Box } from "@mui/material";

function DownPayment(props) {
    const { down, downPayment } = props;

    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            <h2>Down payment</h2>
            <p>How much are you putting down?</p>
            <label htmlFor="downpayment"></label>
            <Slider
                type="range"
                id="downpayment"
                name="downpayment"
                min={5000}
                max={200000}
                step={5000}
                value={downPayment}
                onChange={(e) => down(e.target.value)}
                sx={{
                    width: 300,
                    color: "#5D3FD3",
                }}
            />
            <Box mb={3}>$ {downPayment}</Box>
        </Box>
    );
}

export default DownPayment;
