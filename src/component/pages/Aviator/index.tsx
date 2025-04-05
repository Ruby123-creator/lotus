import React, { useEffect, useRef, useState } from 'react'
import { useUI } from '../../../context/ui.context';

const AviatorComp: React.FC = () => {



  // Generate token and set initial iframeSrc
 

  const [iframeSrc, setIframeSrc] = useState('');

  

  useEffect(()=>{
      const setUrl = ()=>{
        const token = localStorage.getItem('accessToken');
        const childWebsiteURL = `https://tonyexch.com/token=${token}`; 
        setIframeSrc(childWebsiteURL);
      }
      setUrl()
  },[])

  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full ">
        <div className="w-full md:mt-[0px]   lg:overflow-auto" style={{minHeight: "calc(-110px + 100dvh)"}}>
            <div></div>
            <div className="bg-transparent w-full h-full">
                <div className="  w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
                <iframe
               
                id="iframe-id"
                src={iframeSrc}
                width="800"
                height="600"
                title="Second Website"
                className="w-full h-full flex-grow no-scrollbar" allowFullScreen={true}
                        aria-hidden="true"
            ></iframe>
                 </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AviatorComp