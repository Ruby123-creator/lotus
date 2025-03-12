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
                 className=" transition-all ease-in-out duration-200 w-full h-max overflow-x-auto scroll"
               >
                 <div className="px-2 py-2 min-w-full grid grid-rows-2 grid-flow-col gap-1">
                  
                   
                   
                {
                   (casinoCards||[]).map((item: any,i: number)=>{
                       return(
                           <button

                           className=""
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
                             className="flex py-1 my-1 items-center flex-col justify-center w-[100px] h-[50px]"
                           >
                             <img
                               src={item?.img}
                              
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