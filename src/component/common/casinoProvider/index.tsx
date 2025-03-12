import React from 'react'
import { casinoCards, casinoProviders } from '../../../Framework/utils/static'
import { useUI } from '../../../context/ui.context'
import { useNavigate } from 'react-router-dom';

const CasinoProvider: React.FC = () => {
  const {userData,setLoginModal,isLogin} = useUI();
  const navigate = useNavigate();
  return (
     <div
                 id="scrollShow"
                 className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto"
               >
                 <div className="min-w-full grid grid-rows-3 grid-flow-col gap-2">
                  
                   
                   
                {
                   (casinoCards||[]).map((item: any,i: number)=>{
                       return(
                           <button

                           className="leading-normal relative overflow-hidden transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex min-h-[45px] md:min-h-[60px] flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
                           type="button"
                           title="Yggdrasil"
                           onClick={()=>{
                            if(isLogin){
                              navigate("/casino-lobby/casino");

                            }
                            else{
                              setLoginModal(true);
                            }
                           }}
                           key={`CasinoProvider`+i}
                         >
                           <div
                             title="InPlayAndPopulars"
                             id="banners"
                             className="flex items-center flex-col justify-center w-[80px] h-[50px]"
                           >
                             <img
                               src={item?.img}
                               width="80"
                               height="40"
                               className="rounded rounded-8"
                               alt={item?.alt}
                               loading="lazy"
                               title="Yggdrasil"
                             />
                           </div>
                         </button>
                       )
                   })
                }
                  
                 </div>
               </div>
  )
}

export default CasinoProvider