
type colors = 'blue' | 'red' | 'pink' | 'darkGreen';

interface ExploreCard {
  img:string;
  title:string;
  desc:string;
  color:colors;
  category?:string;
}

export const exploreCardsData:ExploreCard[] = [
  {
    img:"/assets/images/Home/woman2Red.png",
    title:'Never-Ending Summer',
    desc:"Throwback Shirts & all-day dressed",
    color:'red',
    category:"all-day"
  },
  {
    img:"/assets/images/Home/woman3Blue.png",
    title:'Best Lovin Sellers',
    desc:"Bikini & Poolside glam include",
    color:'blue',
    category:"beach"
  }
]