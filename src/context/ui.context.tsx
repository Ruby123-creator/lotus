import { createContext, useContext, useMemo, useReducer } from "react";
import { IoIosLogIn } from "react-icons/io";

const initialState = {
  userData: {},
  isLoginAsDemo: typeof window !== 'undefined'
  ? (localStorage.getItem('isLoginAsDemo')):null,
  isLoginAsUser: (typeof window !== 'undefined'
    ? (localStorage.getItem('isLogin')):null),
  isLogin: (typeof window !== 'undefined'
  ? (localStorage.getItem('isLogin')):null)||(typeof window !== 'undefined'
    ? (localStorage.getItem('isLoginAsDemo')):null),
  loginData: {},
  loginModal:false,
  betOdds:{
    odds:"",
    amount:0,
  },
  activeNav:'/',
  betWindow:'',
  uniqueId:'',
  stacks:[100,500,1000,5000,10000,20000,50000,100000,250000,500000,1000000]
};

// Create UIContext
export const UIContext = createContext<any>(null);
UIContext.displayName = "UIContext";

// Reducer function
function uiReducer(state: any, action: { type: string; data: any }) {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, userData: action.data };
    case "SET_LOGIN_USER":
      return {...state, isLogin: action.data};
    case "SET_LOGIN_MODAL":
      return {...state, loginModal: action.data};
    case "SET_MATCHED_BET":
      return {
        ...state, betOdds:action.data
      }
    
    case "SET_BET_WINDOW":
      return {
        ...state, betWindow:action.data
      }
    case "SET_OPEN_STACKS":
      return {
        ...state, stacks:action.data
      }
    case "SET_LOGIN_DATA":
      return{
         ...state , loginData:action.data
      }
    case "SET_ACTIVE_NAV":
      return{
        ...state, activeNav:action.data
      }
      case "SET_UNIQUIEID":
        return {
          ...state, uniqueId:action.data
        }
      
    default:
      return state; // Ensure the state is returned in case of unknown action type
  }
}

// UIProvider component
export function UIProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setLoginModal = (data: any) => dispatch({ type: "SET_LOGIN_MODAL", data });
  const setMatchedBets = (data: any) => dispatch({ type: "SET_MATCHED_BET", data });
  const setStacks = (data: any)=>dispatch({type:"SET_OPEN_STACKS",data});
  const setBetWindow = (data: any)=>dispatch({type:"SET_BET_WINDOW",data});
  const setLoginData = (data:any)=>dispatch({type:"SET_LOGIN_DATA",data})
  const setUserData = (data:any)=>dispatch({type:"SET_USER_DATA",data})
  const setActiveNav = (data:any)=>dispatch({type:"SET_ACTIVE_NAV",data})
  const setUniqueId = (data:any)=>dispatch({type:"SET_UNIQUIEID",data})
  const value = useMemo(() => ({ ...state, setUserData,setLoginModal,setMatchedBets,setStacks,setBetWindow,setLoginData,setActiveNav,setUniqueId }), [state]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// Custom Hook for consuming the context
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
