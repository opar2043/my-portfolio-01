import { duration } from "@mui/material";
import { delay } from "framer-motion";

export const fadeLeft = {
    hidden: {x: 200 , opacity: 0} ,
    show: { x: 0 , opacity: 1 , trasition: {duration: 0.8 , delay: 0.2}}
}