import React from 'react';
import { Carousel } from 'antd';


interface CarousalProp{
   content:any,
   className:string,
}


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarousalComp: React.FC<CarousalProp> = ({content,className}) =>{ 
    
    return(
  <Carousel
  
  autoplay
  autoplaySpeed={2000} // Adjust speed if needed
  dots={false}
  infinite
  slidesToShow={1.5}
  slidesToScroll={1}
  responsive={[
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1.5 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ]}
 >
     {
                    (content||[]).map((item: any,i:number)=>{
                        return(
                            <div
                            key={"carousalContent"+i}
                             className='px-2'
                            >
                           <img src={item?.imgPath}
                            className={className}
                            alt={item?.alt} loading="lazy" />
                            </div>
                           
                        )
                    })
                }
   
  </Carousel>
)};

export default CarousalComp;