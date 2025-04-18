import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GiCardKingDiamonds, GiHorseHead, GiHound } from "react-icons/gi";
import { IoIosJet, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoTennisball } from "react-icons/io5";
import { GiCirclingFish } from "react-icons/gi";
import { icons } from "antd/es/image/PreviewGroup";
import { title } from "process";

export const bannerImages = [{
    imgPath:"assets/images/banner/banner-1-lotus.webp",
    alt:"Banner Img 1"
},

{
    imgPath:"assets/images/banner/banner-1-lotus.webp",
     alt:"Banner Img 2"
},
{
    imgPath:"assets/images/banner/banner-6-lotus.webp",
     alt:"Banner Img 3"
},
{
    imgPath:"assets/images/banner/banner-3-lotus.webp",
     alt:"Banner Img 4"
},
{
    imgPath:"assets/images/banner/banner-4-lotus.webp",
     alt:"Banner Img 5"
},
{
  imgPath:"assets/images/banner/banner-5-lotus.webp",
   alt:"Banner Img 5"
},
]
export const siderbarDrawer = [
 
  {
    title: "Cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
     routing: "/sports-page/cricket"
  },
  {
    title: "Football",
      icon: <BiFootball  size={20}/>,
   routing: "/sports-page/soccer"
  },
  {
    title: "Tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
     routing: "/sports-page/tennis"
  },
  {
    title: "Horse Racing",
      icon: <img alt="horse" src="/icons/horseicon.svg" width={20} height={20}/>,
    routing: "/sports-page/Horse-racing"
  },
  {
    title: "Greyhound Racing",
      icon: <img alt="horse" src="/icons/greyhound.svg" width={20} height={20}/>,
    routing: "/sports-page/Greyhound-Racing"
  },
  {
    title: "Indian Card Games",
      icon: <img alt="horse" src="/icons/card.svg" width={20} height={20}/>,
      routing: "/sports-page/indian-card-games"
  },
  {
    title: "Live Casino",
      icon: <img alt="horse" src="/icons/casino.svg" width={20} height={20}/>,
     routing: "/casino-lobby/casino"
  },
  {
    title: "Aviator",
      icon:<img alt="horse" src="/icons/aviator.svg" width={20} height={20}/>,
       routing: "/aviator"
  },
  {
    title: "Slot Games",
      icon: <img alt="horse" src="/icons/slot.svg" width={20} height={20}/>,
routing: "/casino-lobby/slot-games"
  },
 
  ]
export const socialLinks = [{
      title:"",
      icon: <FaTelegramPlane size={25} fill="var(--color-quaternary)" />
    },
    {
      title:"",
      icon: <IoLogoWhatsapp size={25} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <IoIosMail size={30} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <FaFacebook size={25} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <BsInstagram size={25} fill="var(--color-quaternary)"/>
    },
  ]

export const banner =[
  {
  title:"wingogames",
  url:"https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif",
  path:"/casino-lobby/slot-games"
},
{
  title:"fungames",
  url:"https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif",
  path:"/casino-lobby/crash"

},
{
  title:"aviator",
  url:"https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif",
  path:"/aviator"

},
{
  title:"evoplay",
  url:"https://tezcdn.io/casino/casino-highlight/evoplay-730-280.gif",
  path:"/casino-lobby/shooting"

},
{
  title:"sportsbook",
  url:"assets/images/sportsbook.webp",
  path:"/casino-lobby/lottery"

},
{
  title:"mac",
  url:"https://tezcdn.io/casino/casino-highlight/mac88-730*280.webp",
  path:"/casino-lobby/casino"

},
]

export const carousalImages = [
{
  title1: 'Cricket',
  url:'/cricket',
  bgUrl1: 'assets/images/gaming/cricket-bg.png',
  iconUrl1: <BiSolidCricketBall size={20}/>,
  altText1: 'cricket-image',
  
},
{
  title1: 'Football',
  url:'/soccer',

  bgUrl1: 'assets/images/gaming/football-bg.png',
  iconUrl1: <BiFootball size={20}/>,
  altText1: 'football-image',
  
},
{
  title1: 'Tennis',
  url:'/tennis',

  bgUrl1: 'assets/images/gaming/tennis-bg.png',
  iconUrl1: <IoTennisball size={20}/>,
  altText1: 'tennis-image',
  
},
{
  title1: 'Horse',
  url:'/Horse-Racing',

  bgUrl1: 'assets/images/gaming/horse-bg.png',
  iconUrl1: <img alt="horse" src="/icons/white-horse.svg" width={20} height={20}/>,
  altText1: 'horse-image',
  
},
{
  title1: 'Greyhound',
  url:'/Greyhound-Racing',

  bgUrl1: 'assets/images/gaming/greyhound-bg.png',
  iconUrl1: <img alt="horse" src="/icons/white_greyhound.svg" width={20} height={20}/>,
  altText1: 'greyhound-image',
  
},
// Add more button objects here
];

export  const cardGames = [{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-31.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
alt:"Banner Img 1"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-27.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 2"
},
{
imgPath:"https://auraimgs.imgix.net/indiangamesposters-04.webp?q=65&amp;amp; w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 3"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-02.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 4"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-25.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-26.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-23.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-15.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-24.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-09.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-12.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-11.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-13.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-29.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-22.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://Playfunexch.com/assets/images/casino/livecasino/Casino+Meter.webp",
 alt:"Banner Img 5"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-07.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-20.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-01.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-05.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-10.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-06.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://Playfunexch.com/assets/images/casino/livecasino/The+Trap.webp",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-03.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-19.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-17.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
]

export const popularGames = [{
imgPath:"https://luckmedia.link/aes_baccarat_classic/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
alt:"Banner Img 1"
},

{
imgPath:"https://luckmedia.link/aes_dragontiger/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 2"
},
{
imgPath:"https://luckmedia.link/aes_thai_hi_lo/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 3"
},
{
imgPath:"https://luckmedia.link/spb_aviator/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 4"
},
{
imgPath:"https://luckmedia.link/jil_royal_fishing/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://luckmedia.link/dwg_baccarat_evolution_pairs/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/evo_speed_baccarat_n/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/evo_deal_or_no_deal/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/rtg_aztec_spins/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://luckmedia.link/sms_jetx/thumb_3_4_custom.webp?q=65&amp;w=600&amp;px=auto&amp;auto=format",
 alt:"Banner Img 5"
},
]

export const casinoProviders = [{
  imgPath:"assets/casiono-provider-img/1x2-gamimg.svg",
  alt:"Banner Img 1"
  },
  
  {
  imgPath:"assets/casiono-provider-img/7mojos.svg",
   alt:"Banner Img 2"
  },
  {
  imgPath:"assets/casiono-provider-img/ad-lunam.svg",
   alt:"Banner Img 3"
  },
  {
  imgPath:"https://luckmedia.link/providers/aux/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 4"
  },
  {
  imgPath:"https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },
  {
  imgPath:"/assets/Bet_Games-DQk1EkcT.svg",
   alt:"Banner Img 5"
  },{
  imgPath:"https://luckmedia.link/providers/btg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },{
  imgPath:"https://luckmedia.link/providers/bng/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },{
  imgPath:"/assets/dragonsoft-CjyAhXve.svg",
   alt:"Banner Img 5"
  },
  {
  imgPath:"/assets/elk-provider-B53cQllv.svg",
   alt:"Banner Img 5"
  },
  {
    imgPath:"https://luckmedia.link/providers/end/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
     alt:"Banner Img 5"
    },
    {
      imgPath:"https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
       alt:"Banner Img 5"
      },

      {
        imgPath:"/assets/evo-play-B4a-CkvN.svg",
         alt:"Banner Img 5"
        },
  ]


  export const headerMenu = [
  
    { title: "Cricket", routing: "/sports-page/cricket" },
    { title: "Football", routing: "/sports-page/soccer" },
    { title: "Tennis", routing: "/sports-page/tennis" },
    { title: "Horse Racing", routing: "/sports-page/Horse-Racing" },
    { title: "GreyHound Racing", routing: "/sports-page/Greyhound-Racing" },
    
    { title: "Aviator", routing: "/aviator" },
    { title: "Live Casino", routing: "/casino-lobby/casino" },
    { title: "Slots", routing: "/casino-lobby/slot-games" },
    { title: "Crash Games", routing: "/casino-lobby/crash" },
    { title: "Fishing Games", routing: "/casino-lobby/shooting" },
    { title: "Lottery", routing: "/casino-lobby/lottery" },

  ];

  export const mobileHeaderMenu = [
  
    
    { title: "Aviator", routing: "/aviator",icon:  <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />
     },
    { title: "Live Casino", routing: "/casino-lobby/casino" ,icon:  <img src="/icons/casino.svg" alt="My Icon" width={20} height={20} />},
    { title: "Slots", routing: "/casino-lobby/slot-games", icon: <img src="/icons/slot.svg" alt="My Icon" width={20} height={20} />},
    { title: "Crash Games", routing: "/casino-lobby/slot-games/Crash" ,icon: <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />},
    { title: "Fishing Games", routing: "/casino-lobby/slot-games/Shooting" ,icon:<GiCirclingFish size={20} fill="#c10931"/>},
  ];
  export const casinoCards =[
    {
    img:"/assets/images/providers/casino-prov-1.webp",
    alt:'img-1'
  },
  {
    img:"/assets/images/providers/casino-prov-2.webp",
    alt:'img-2'
  },
  {
    img:"/assets/images/providers/casino-prov-3.webp",
    alt:'img-3'
  },
  {
    img:"/assets/images/providers/casino-prov-4.webp",
    alt:'img-4'
  },
  {
    img:"/assets/images/providers/casino-prov-5.webp",
    alt:'img-5'
  },
  {
    img:"/assets/images/providers/casino-prov-6.webp",
    alt:'img-6'
  },
  
  {
    img:"/assets/images/providers/casino-prov-7.webp",
    alt:'img-7'
  },
  {
    img:"/assets/images/providers/casino-prov-8.webp",
    alt:'img-8'
  },
  {
    img:"/assets/images/providers/casino-prov-9.webp",
    alt:'img-9'
  },
  {
    img:"/assets/images/providers/casino-prov-10.webp",
    alt:'img-10'
  },
  {
    img:"/assets/images/providers/casino-prov-11.webp",
    alt:'img-11'
  },
  {
    img:"/assets/images/providers/casino-prov-12.webp",
    alt:'img-12'
  },
  {
    img:"/assets/images/providers/casino-prov-13.webp",
    alt:'img-13'
  },
  {
    img:"/assets/images/providers/casino-prov-14.webp",
    alt:'img-14'
  },
  {
    img:"/assets/images/providers/casino-prov-15.webp",
    alt:'img-15'
  },
  
  {
    img:"/assets/images/providers/casino-prov-16.webp",
    alt:'img-16'
  },
  {
    img:"/assets/images/providers/casino-prov-17.webp",
    alt:'img-17'
  },
  

]

export const baccarats=[{
  img:"https://client.qtlauncher.com/images/?id=EVO-always8baccarat_en_US&amp&type=logo-square&amp;version=1731473904011"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-bacbo_en_US&amp&type=logo-square&amp;version=1678359207526"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTV-baccarat_en_US&amp&type=logo-square&amp;version=1662976207439"
},
{
 img:"https://client.qtlauncher.com/images/?id=EVO-baccarat_en_US&amp&type=logo-square&amp;version=1678359251397" 
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-baccarat_en_US&amp&type=logo-square&amp;version=1716211287452"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat1_en_US&amp&type=logo-square&amp;version=1727968121327"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat3_en_US&amp&type=logo-square&amp;version=1727875420320"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat5_en_US&amp&type=logo-square&amp;version=1727875500599"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-baccarata_en_US&amp&type=logo-square&amp;version=1726028817311"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-baccarata_en_US&amp&type=logo-square&amp;version=1717130391537"
}
]

export const roulette=[{
  img:"https://client.qtlauncher.com/images/?id=VGL-americanautoroulette_en_US&amp&type=logo-square&amp;version=1701672928302"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-americanroulette_en_US&amp&type=logo-square&amp;version=1678358704943"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autolightningroulette_en_US&amp&type=logo-square&amp;version=1701277574098"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-automaticroulette_en_US&amp&type=logo-square&amp;version=1716210438504"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-autoroulette1_en_US&amp&type=logo-square&amp;version=1727875079920"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-autoroulette1_en_US&amp&type=logo-square&amp;version=1716214180331"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autoroulette_en_US&amp&type=logo-square&amp;version=1726028196831"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autoroulettelapartage_en_US&amp&type=logo-square&amp;version=1702450712159"
}
]

export const andarbhar =[{
  img:"https://client.qtlauncher.com/images/?id=EZU-andarbahar_en_US&amp&type=logo-square&amp;version=1678476979546"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-andarbahar1_en_US&amp&type=logo-square&amp;version=1727874820295"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-casinomarinaandarbahar_en_US&amp&type=logo-square&amp;version=1685691014988"
},
{
  img:"https://client.qtlauncher.com/images/?id=SAG-mandarbahar_en_US&amp&type=logo-square&amp;version=1702895346689"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-superandarbahar_en_US&amp&type=logo-square&amp;version=1678388339595"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-ultimateandarbahar_en_US&amp&type=logo-square&amp;version=1669146546695"
}]


