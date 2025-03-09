import React, { useEffect, useState } from "react";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { IoIosLogOut, IoIosSearch } from "react-icons/io";
import { TbLogin } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";

import { Drawer, Dropdown, MenuProps, Modal } from "antd";
import LoginModal from "../modals/login";
import AccountDrawer from "../Drawer/accountDrawer";
import { useUI } from "../../context/ui.context";
import { getFormattedDateTime, logOut } from "../../Framework/utils/constant";
import MobileDrawer from "../Drawer/mobileDrawer";
import HeaderMenu from "./menu";
import { FaRegUserCircle } from "react-icons/fa";
import SignUp_Modal from "../modals/signup";
import { FaAngleDown } from "react-icons/fa6";

const Header: React.FC = () => {
  const {isLogin,setLoginModal,isLoginAsDemo,userData,loginModal,loginData} = useUI();
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [search, setSearch] = useState("");
  const [mobileDrawer,setMobileDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
   console.log(userData,"gipeeee");
  const [openDrawer, setOpenDrawer] = useState(false);
 
  const Navigate = useNavigate();
  const   items: MenuProps['items'] = [
    {
      label: <span onClick={()=>Navigate('/my-bets')}> My Bets</span>
   
,
   
    key:41,
    
  },
  
  {
    label:<span onClick={()=>Navigate('/declare-bets')}>  Betting Profit and Loss</span>,
   
    key:42,
    
  },
  {
    label: <span onClick={()=>Navigate('/account-statement')}>Account Statement</span>,
   
    key:43,
    
  },
  // {
  //   label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
  // Market Analysis
  // </a>,
   
  //   key:44,
    
  // },
  // {
  //   label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
  // Rules & Regulations
  // </a>,
   
  //   key:44,
    
  // },
  {
    label: <span onClick={()=>Navigate('/change-password')}>Change Password</span>,
   
    key:44,
    
  },
  ]
 

  // Function to format the date and time using date-fns


  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDateTime("date"));
      setCurrentTime(getFormattedDateTime("time"));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      
      <div id="header" title="header" className="fixed top-0 w-full z-[100]">
        
          
        <div className="flex flex-col autoAnimate">
        <div
                id="beforelogin"
                className="w-full bg-headerBg h-[54px] lg:h-[93px] pr-[4px] md:px-4 flex items-center justify-between gap-1   relative "
              >
                <div
                  id="logoContainer"
                  className="logo flex w-full  h-full md:w-fit "
                >
                  <div
                    id="beforelogin"
                    className=" flex items-center w-[40px] md:w-fit justify-center lg:hidden "
                  >
                    <button
                      className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1 cursor-pointer"
                      type="button"
                      onClick={()=>{setMobileDrawer(true)}}
                    >
                      <span>
                        <svg
                          height="19"
                          width="16"
                          fill="var(--color-quaternary)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <a href="/">
                      <div className="cursor-pointer">
                        <img
                          src="/assets/images/logo.png"
                          width="124"
                          alt=""
                          className="hidden sm:block"
                        />
                        <img
                          src="/assets/images/logo.png"
                          width="100"
                          className="sm:hidden mobileLogoHeight"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
            
                <div
                  id="currentDateTime"
                  className=" hidden font-lato lg:block "
                >
                  <div className=" w-full text-text_Quaternary1 text-[10px] font-semibold  lg:text-[14px] flex flex-col px-2">
                    <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">
                      {currentDate}{" "}{currentTime}{" "}
                    </div>
                  
                  </div>
                </div>
                <div className=" flex justify-around items-center gap-5">
{
  isLogin ? <div
                 
  className=" hidden font-lato lg:block px-5"
>
  <div className="  flex gap-2 px-2 text-[12px]">
  <button
        id="loginButton"
        onClick={() => setLoginModal(true)}
        className="text-text_Ternary py-1 px-5 rounded secondaybtn font-normal font-lato  flex 
        flex-col items-center"
      >
        <span>Balance</span>
        <i>{ (Number(userData?.Balance)-Number(Math.abs(userData?.Exposure)))}</i>
      
      </button>
      <button
        id="loginButton"
        onClick={() => setLoginModal(true)}
        className=" text-text_Ternary py-1 px-5 rounded secondaybtn font-normal font-lato  flex 
        flex-col items-center"
      >
        <span>Exposure</span>
        <i>{userData?.Exposure||0}</i>
      
      </button>
  </div>
</div>:""
}
                
                <div
                  id="searchBox"
                  className="text-text_Quaternary px-5 relative hidden max-w-12 font-lato lg:block flex-grow"
                >
                  <div className=" relative w-full">
                    <input
                      className="border-1 peer appearance-none text-xs pl-9 py-2 border  rounded md:text-[14px]  bg-bg_Quaternary  text-text_Ternary "
                      placeholder="Search Events"
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoIosSearch
                      className="absolute top-1/2 left-3 -translate-y-1/2"
                      width={16}
                      height={16}
                      fill="#999"
                    />
                  </div>
                </div>
                {isLogin ? (
                    <>
                      {" "}
                      <div
                        id="loginName"
                        className="text-text_Quaternary text-[10px] lg:text-[10px] font-semibold xl:flex flex-col px-2 hidden px-5"
                      >
                        <div className="flex gap-0.5 text-white/80  text-nowrap whitespace-nowrap">
                          Login as
                          <span className="font-medium text-text_Quaternary">
                            {userData?.UserName ? userData?.UserName :'DEMO'}
                          </span>
                        </div>
                        <div className="flex  gap-0.5 text-white/80  text-nowrap whitespace-nowrap">
                          Last logged in
                          <span className="font-medium text-text_Quaternary">
                            {loginData?.loginTime}
                          </span>
                        </div>
                      </div>
                     
                     
                      <div className=" w-max hidden items-center justify-center gap-2 rounded-full  lg:flex">
                        <button
                         
                          
                        >
                          
                          <Dropdown menu={{ items }} placement="bottomLeft" arrow  trigger={['click']}>
                          <span className=" text-x lg:text-xxs text-text_Quaternary1  font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800] flex items-center">
                           <IoSettingsSharp stroke="#ffecc6"/> Account <FaAngleDown stroke="#ffecc6"/>
                          </span>
      </Dropdown>
                         
                        </button>

                        <button
                         onClick={()=>{
                          logOut();
                         }}
                          
                        >
                         
                        
                          <span className=" text-x lg:text-xxs text-text_Quaternary1  font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800] flex items-center gap-1">
                           Log out <IoIosLogOut stroke="#ffecc6" fontWeight={800}/>
                          </span>
 
                         
                        </button>
                      </div>
                      <div className=" w-max flex items-center justify-center">
                        <div
                          id="mobileSearchIcon"
                          className=" lg:hidden mr-[2px] flex items-center justify-center"
                        >
                          <span className="bg-none border-none shadow-none px-1">
                            <svg
                              fill="#fff"
                              className=""
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className=" flex justify-between items-center gap-x-1 h-max lg:hidden">
                          {/* <a href="deposit/">
                            <button
                              type="button"
                              className=" leading-normal  transition duration-150 ease-in-out overflow-hidden relative active:scale-95 hidden xxs:flex items-center h-fit justify-center bg-bg_Quaternary rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-text_Primary   text-sm   text-center  cursor-pointer"
                            >
                              <span className="  font-semibold flex flex-row font-lato md:font-normal sm:text-base xs:text-sm">
                                <span>Deposit</span>
                              </span>
                              <span className="shimmer"></span>
                            </button>
                          </a> */}
                          {/* <Dropdown menu={{ items }} placement="bottomLeft" arrow  trigger={['click']}> */}
                          <button
                            title="Balance"
                            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-full text-text_Quaternary  pl-3 bg-bg_Secondary flex items-center justify-center pr-1 py-1 xs:py-1 sm:py-2  gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]  cursor-pointer"
                            type="button"
                            onClick={()=>setOpenDrawer(true)}
                          >
                            <span className="text-xs sm:text-base font-semibold bg-transparent">
                            ₹{( 
    (userData?.Balance || 0) - (userData?.Exposure < 0 ? Math.abs(userData?.Exposure || 0) : 0) 
).toFixed(2)}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="var(--color-quaternary)"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                            </svg>
                          </button>
{/* </Dropdown> */}
                         
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    <div className="w-max items-center justify-center gap-10 lg:rounded-full flex -lg:rounded hidden md:block">
                      <button
                        id="loginButton"
                        onClick={() => setLoginModal(true)}
                        className="text-x lg:text-xxs text-text_Quaternary1  font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800] px-5"
                      >
                        Log in
                      
                      </button>
                      <a
                        id="loginButton"
                         href="https://api.whatsapp.com/send?phone=237659701650"
                        target="_blank"
                        className="text-x lg:text-xxs text-text_Quaternary1  font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800]"
                      >
                       Sign up
                      
                      </a>
                     
                    </div>
                    <div className="w-max items-center justify-center gap-2 lg:rounded-full flex -lg:rounded block md:hidden">
                      <button
                        id="loginButton"
                        onClick={() => setLoginModal(true)}
                        className=" text-text_Ternary py-1 px-2 rounded secondaybtn font-normal font-lato  flex 
        flex-col items-center"
                      >
                        Log In
                      
                      </button>
                      <a
                        id="loginButton"
                        href="https://api.whatsapp.com/send?phone=237659701650"
                        target="_blank"
                        className=" py-1 px-2 rounded bg-bg_Quaternary text-text_Ternary font-normal font-lato  flex 
        flex-col items-center"
                      >
                       Sign up
                      
                      </a>
                     
                    </div>
                    </>
                    
                  )}
                </div>
               
               

               
              </div>
           <HeaderMenu/>
        
        </div>
     
   
  </div>
        
      
  <Modal open={loginModal} footer={null} closeIcon={false}     onCancel={() => setLoginModal(false)}
      >
        <LoginModal openModal={setIsModalOpen}/>
      </Modal>
      
      <Modal open={isModalOpen} footer={null} closeIcon={false}     onCancel={() => setIsModalOpen(false)}
      >
        <SignUp_Modal openModal={setIsModalOpen}/>
      </Modal>
      <Drawer closeIcon={null} onClose={()=>setOpenDrawer(false)} maskClosable={true} open={openDrawer}>
        <AccountDrawer openDrawer = {(e:any)=>setOpenDrawer(e)}/>
      </Drawer>
      <Drawer placement="left" onClose={()=>setMobileDrawer(false)} maskClosable={true}  open={mobileDrawer}>
       <MobileDrawer setMobileDrawer = {(e:any)=>setMobileDrawer(e)}/>
      </Drawer>
    </div>
  );
};

export default Header;
