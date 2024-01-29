import { useState } from "react"
import AboutUsClass from "./AboutUsClass"

function AboutUs ({Name,Address}) {
    const [count]=useState(0);
    return(
        <div>
          
<AboutUsClass Name="Badal Class" Address="Ranchi Class"/>

        </div>
    )
}
export default AboutUs