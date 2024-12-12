import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/router";


const brandPage=()=>{

const router=useRouter()
const {brand}=router.query



    return(
        <div>
            <Header/>
            <div className="brand-page">
            <h1>Welcome to the {brand} Collection!</h1>
        <p>
          Explore our amazing range of {brand} cars. Find the perfect model that suits your style!
        </p>

            </div>

            <Footer/>

        </div>

    )


}

export default brandPage;
