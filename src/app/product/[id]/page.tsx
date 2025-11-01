'use client'

import Heading from "@/components/shared/Typograpgy/Heading";
import { useParams, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
// we need to take : 
// 1-the main category
// 2-
// 
// 
const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const tab = searchParams?.get("tab") || 'details';
  type tabValues = 'details' | 'reviews' | 'shipping'
  const handleTabChanged = (newTab:tabValues) =>{
    router.push(`?tab=${newTab}`);
  }
  return (
    <div className="">

    </div>
  )
}

export default page



      // <button onClick={()=>handleTabChanged('reviews')}>
      //     toggle reviews
      // </button>
      // <button onClick={()=>handleTabChanged('shipping')}>
      //     toggle shipping
      // </button>

      // <Heading size="h36" >
      //     id is : {id}
      // </Heading>
      // {tab == 'reviews' && <p>Reviews</p>}
      // {tab == 'shipping' && <p>Shipping</p>}