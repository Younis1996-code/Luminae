
export interface FooterList{
  title: string;
  links: LinkFooter[];
}

interface LinkFooter{
  linkTo:string;
  linkText:string;
}

export const footerLists : FooterList[] = [
  {
    title:"Company",
    links:[
      {
        linkText:'About Us',
        linkTo:'about'
      },
      {
        linkText:'Our Store',
        linkTo:'store'
      },
      {
        linkText:'Contact us',
        linkTo:'contact'
      }
    ]
  },
  {
    title:"Career Opportunities",
    links:[
      {
        linkText:'Selling Programs',
        linkTo:'programs'
      },
      {
        linkText:'Advertise',
        linkTo:'ads'
      },
      {
        linkText:'Cooperation ',
        linkTo:'cooperation '
      }
    ]
  },
  {
    title:"How to Buy",
    links:[
      {
        linkText:'Making Payments',
        linkTo:'payments'
      },
      {
        linkText:'Delivery Options',
        linkTo:'deliveryOps'
      },
      {
        linkText:'Buyer Protection',
        linkTo:'client-protection'
      },
      {
        linkText:'New User Guide',
        linkTo:'guide'
      },
    ]
  },
  {
    title:"Help",
    links:[
      {
        linkText:'Contacts Us',
        linkTo:'contact'
      },
      {
        linkText:'FAQ',
        linkTo:'faq'
      },
      {
        linkText:'Privacy Policy',
        linkTo:'privacy-policy'
      }
    ]
  },
]




export const moneyProvidersLinks = [
  {
    linkTo:'https://www.visa.com/',
    svg: '/assets/icons/visaLogo.svg',
    name:'Visa'
  },
  {
    linkTo:'https://www.mastercard.com/',
    svg : '/assets/icons/mastercardLogo.svg',
    name:'Mastercard'
  },
  {
    linkTo:'https://www.paypal.com/',
    svg : '/assets/icons/paypalLogo.svg',
    name:'Paypal'
  }
]