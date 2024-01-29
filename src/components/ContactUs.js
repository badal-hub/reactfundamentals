import { useEffect } from "react"

const ContactUs = () => {
    useEffect(()=>{
    const timer =  setInterval(()=>{
            console.log("setInterval is calleds")
        },1000)
        return()=>{
clearInterval(timer)
        }
    },[])
    return(
        <div>
            <h1>Welcome to contact us page</h1>
        </div>
    )
}
export default ContactUs