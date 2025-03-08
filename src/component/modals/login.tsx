import { Dropdown, MenuProps, Modal } from 'antd';
import React, { useState } from 'react'
import { useUI } from '../../context/ui.context';
import { FaMobileAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosCloseCircle } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { useLoginPassword } from '../../Framework/login';


interface Props{
    openModal:any
}
  
const LoginModal: React.FC<Props> = () => {
    const {loginModal, setLoginModal,isLoginData} = useUI();
     const [login,setLogin] = useState("userId");
    const [mobileNo,setMobileNo] = useState('');
    const [password,setPassword] = useState('');
    const [userId,setUserId] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const togglePasswordVisibility = (setter: { (value: React.SetStateAction<boolean>): void; (arg0: (prev: any) => boolean): void; }) => {
        setter((prev: any) => !prev);
      };
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: <li className=" border-b-[1px] pb-1" onClick={()=>setLogin('mobile')}><button type="button" className="w-full py-1 grid grid-cols-4"><span className=" col-span-1 flex items-center justify-center ">
            <FaMobileAlt fill={login === "userId" ? "#6B7280" :"var(--color-primary)"} size={20}/>
         
            </span><span className={` col-span-3 pl-2 font-normal f] font-lato text-start ${login === 'userId'?'text-gray-500':'text-text_Primary'}  text-red-600  `}>Mobile Number</span></button></li>,
        },
        {
          key: '2',
          label: <li className="pb-1" onClick={()=>setLogin('userId')}><button type="button" className="w-full py-1 grid grid-cols-4"><span className=" col-span-1 flex items-center justify-center ">
            <FaUser  fill={login === "userId" ? "var(--color-primary)" :"#6B7280"} size={20}/>
            </span><span className={ `col-span-3 pl-2 font-normal f] ${login === 'userId'?'text-text_Primary':' text-gray-500'} font-lato text-start text-red-600  `}>User Id</span></button></li>,
        },
       
      ];
        const { mutate: loginUser, isError: error } = useLoginPassword();
       
    const handleLogin = (e:any) => {
        e.preventDefault();

        if (login === 'userId') {
     
        loginUser({UserName:userId,Password:password});
        //    window.location.reload();
        } else {
          alert("Invalid mobile number or password");
        }
      };
    const logInWithDemo = () => {
        localStorage.setItem('isLoginAsDemo', 'true');
        window.location.reload();
        
        // const url = sessionStorage.getItem('url');
        // const isLoginRequired = Boolean(localStorage.getItem('isLogin')) || false
        // if(isLoginRequired){
        //     // Redirect to login page
        //     window.location.href = JSON.parse(url as any);
        // }else{
        
        // }
    }
  return (
    <div
    className="z-2 popUpOpenAnimation max-w-[450px] bg-bg_Primary py-4 px-8 rounded-md">
   
    <div className="logo w-full hidden lg:flex items-center justify-center mb-4">
        <img src="assets/images/logo.png" alt="logo" className="w-72 h-auto" width="100" height="100" />
    </div>
    <div className="flex gap-10 items-start h-[95%] lg:h-auto w-full">
        <div className="hidden lg:w-[50%] rounded-lg overflow-hidden">
            <img src="assets/images/logo.png" alt="register banner" />
        </div>
        <div title="mobileLogin" className="flex flex-col items-start gap-y-4 w-full">
            <div className="logo w-full lg:hidden flex items-center justify-center">
                <img src="assets/images/logo.png" alt="logo" />
            </div>
            <form className="w-full gap-y-4 flex flex-col" autoComplete="on">
                <div title="loginFormMonileUserIdInput" className="w-full">
                    <div
                        className="font-lato uppercase text-text_Quaternary1 text-[10px] md:text-xs lg:text-sm ml-1">
                        {
                                login === "userId" ? "USER ID":"PHONE NUMBER"
                            }
                    </div>
                    <div className="flex w-full items-center py-1 bg-bg_BgGray rounded-lg border">
                    {
                            login === "userId" ? <input
                            id="mobile-no-input"
                            className="block focus:outline-none w-full font-lato px-2 bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                            placeholder="USER ID" autoComplete="userId" type="text" maxLength={10}
                            name="userId" value={userId} onChange={(e)=>setUserId(e.target.value)} />:<>
                            <span id="dropdown-phone-button"
                            className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-lato font-normal text-center">+91</span>
                            <input
                            id="mobile-no-input"
                            className="block focus:outline-none w-full font-lato bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                            placeholder="895XX6XXXX" autoComplete="off" type="tel" maxLength={10}
                            name="mobileNum" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} />
                            
                          
                            </>
                        }
                        
                        <span className="h-fit">
                            <div className="w-full h-full relative">
                            <Dropdown menu={{ items }} placement="bottom">
                            <div className="block z-100 h-full">
                                    <div id="dropdownDefaultButton"
                                        className="w-full cursor-pointer relative hover:undefined font-medium rounded-r-sm min-h-[35px] text-sm pr-6 text-center inline-flex items-center bg-bg_BgGray text-text_Quaternary">
                                            {
                                                login === 'userId' ?<FaUser size={20} fill="var(--color-primary)"/>:<FaMobileAlt size={20} fill="var(--color-primary)"/>
                                            }
                                       <svg
                                            className="w-5 h-5 ms-3 absolute right-1 transform transition-all ease-in-out duration-200"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" d="m1 1 4 4 4-4"
                                                fill="var(--color-primary)"></path>
                                        </svg>
                                    </div>
                                </div>
</Dropdown>
                                
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div title="passwordInput" className="w-full font-lato">
                        <div className="text-[10px] text-text_Quaternary1 ml-1 md:text-xs lg:text-sm">
                            Password
                        </div>
                        <div className="flex w-full items-center py-2 px-2 bg-bg_BgGray rounded-lg border">
                            <input id="password-input"
                                className="block focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-bg_BgGray text-sm xs:text-md"
                                placeholder="Password" autoComplete="off" type="password" name="password"
                                value={password} onChange={(e)=>setPassword(e.target.value)} data-nlok-ref-guid="32d7f6e0-ad2d-4ff8-ded5-6a486c5ecae5" />
                            <div id="norton-idsafe-field-styling-divId" 
            //                 style="
            //   height: 16px;
            //   max-width: 16px;
            //   vertical-align: top;
            //   position: absolute;
            //   top: 212.33749985694885px;
            //   left: 369.3161109185988px;
            //   cursor: pointer;
            //   resize: both;
            //   z-index: 2147483646;
            // "
            >
                               
                            </div>
                            <span className="min-h-[30px] flex items-center justify-center"><svg
                                    xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                    viewBox="0 0 512 512">
                                    <title>Eye</title>
                                    <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none" stroke="var(--color-primary)" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="32"></path>
                                    <circle cx="256" cy="256" r="80" fill="none"
                                        stroke="var(--color-primary)" stroke-miterlimit="10"
                                        stroke-width="32"></circle>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div title="forgotPassword"
                        className=" w-full  text-start text-xs cursor-pointer underline text-text_Quaternary1 font-lato md:text-xs lg:text-sm">
                        Log In with OTP?
                    </div>
                </div>
                <div title="loginButton" className="w-full">
                    <button type="submit"
                        className="text-text_Ternary py-1 px-5 rounded secondaybtn leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_LoginButtonColorAter shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer"
                        data-nlok-ref-guid="0face3d5-3c80-4b7a-e110-8802efec243d" 
                        onClick={(e)=>handleLogin(e)}
                        >
                        Login
                    </button>
                </div>
                <div title="loginButton" className="w-full">
                    <button type="button" onClick={()=>logInWithDemo()}
                        className="text-text_Ternary py-1 px-5 rounded secondaybtn leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_LoginButtonColorAter shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer -mt-2">
                        Login With Demo Id
                    </button>
                </div>
            </form>
            <div title="registerNowButton"
                className="w-full flex justify-center items-center text-xs md:text-sm lg:text-base">
                <div className="text-text_Quaternary1">
                    New User?<span className="text-text_Quaternary1 cursor-pointer">Create an account</span>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default LoginModal