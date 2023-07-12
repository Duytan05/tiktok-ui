import { forwardRef } from "react";
const  Image=( ({ ...props },ref) {
    return <img ref={ref}{...props} />;
})

export default Image
