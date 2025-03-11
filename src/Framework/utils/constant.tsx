import { notification } from "antd";
import axios from "axios";
import { differenceInSeconds, format, parseISO } from "date-fns";
import { API_ENDPOINTS } from "./api-endpoints";
 export function extractEventDetails(eventName: String|any) {
        const eventTitle = (eventName||"").replace(/\u00a0/g, " ")
        const eventParts = (eventTitle||"").split(" / ");
        const teams = (eventParts[0]||"").split(" v ");
        const dateTime = eventParts[1];
        const [day, month, year] = ((dateTime||"").split(" ")[0]||"").split("/"); // Extract date parts
        const [hours, minutes] = ((dateTime||"").split(" ")[1]||"").split(":"); // Extract time parts
    
        const eventDate = new Date(year, month - 1, day); // Convert to JavaScript Date object
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1); // Get tomorrow's date
    
        let displayDate;
       
            displayDate = (dateTime||"").split(" ")[0]; // Ignore events that are neither today nor tomorrow
        
        // if (displayDate) {
            return {
                team1: teams[0],      // Sri Lanka
                team2: teams[1],      // Australia
                date: displayDate,    // Today or Tomorrow
                time: `${hours}:${minutes}` // HH:MM format
            };
        // }
    
        // return null; // Ignore events that are neither today nor tomorrow
    }

    export function extractDetails(eventName: String|any) {
      console.log(eventName,"eventsss::::::")
      const val = ((eventName||"").split('\n')[0]||"");
      const teams = (val||"").includes('-') ? (val||"").split("-") : (val||"").split(" V ");
  const team1 = teams[0];
  const team2 = teams[1];

  // Extracting date and time
  const dateTime = (eventName||"").split('\n')[1];
  const date = (dateTime||"").split(' ')[0];
  const time = (dateTime||"").split(' ')[1];
      // if (displayDate) {
          return {
              team1,      // Sri Lanka
              team2,      // Australia
              date,    // Today or Tomorrow
              time, // HH:MM format
          };
      // }
  
      // return null; // Ignore events that are neither today nor tomorrow
  }


    export const getFormattedDateTime = (val: string) => {
        const now = new Date();
    
        // Format the date and time
        const formattedDate = format(now, "MMM do, yyyy"); // e.g., "Dec 20th, 2024"
        const formattedTime = format(now, "HH:mm:ss"); // e.g., "10:34:13"
    
        // Get the timezone offset in GMT format
        const timezoneOffset = now.getTimezoneOffset();
        const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60));
        const timezoneMinutes = Math.abs(timezoneOffset % 60);
        const timezoneSign = timezoneOffset > 0 ? "-" : "+";
        const timezone = `GMT ${timezoneSign}${timezoneHours}:${String(
          timezoneMinutes
        ).padStart(2, "0")}`;
         const dateTime ={
            headerDate: `${formattedDate} (${timezone})`,
            haederTime:` ${formattedTime}`,
            dateSetting: format(now, "MMMM do, yyyy")
         }
        // Combine everything into the desired format
        return val === "date"
          ? `${formattedDate}`
          : ` ${formattedTime}`;
      };



      export const checkTimeDifference = (updatedTime: string) => {
        const updatedDate = parseISO(updatedTime); // Convert string to Date object
        const currentDate = new Date(); // Get the current time
      
        const diffInSeconds = differenceInSeconds(currentDate, updatedDate); // Get difference in seconds
       console.log(updatedTime,updatedDate,currentDate,diffInSeconds,"MANJUUU")
        return diffInSeconds <= 15; // Return true if difference is ≤ 10 seconds
      };


      export const showToasterMessage = (payload:{messageType:string,description:string}) => {
        if(!payload.messageType){
          payload.messageType = 'error';
        }
        // notification[payload.messageType || 'error'](
      
        notification.open({
            message: payload.description,
            // description:
            // (payload.messageType === "error" ? 'Error' : (payload.messageType === "success" ? 'Success': 'Warning'))+ " ! " +(payload.description || 'Error'),
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 2,
           
            className: payload.messageType +" "+ 'custom-notification'
          });


        
      }


      const signoutUser = async (username:any) => {
        
        if(username){
          const response = await axios.get(`${API_ENDPOINTS.LOGOUT}?username=${username}`);
         if(response?.data?.status === "success"){
          localStorage.removeItem("isLogin");
          localStorage.removeItem("credentials");
          console.log(response,"LOGOUT:::::::::::::::::::::")
          showToasterMessage({messageType:"success",description: response?.data?.message})

         window.location.reload();
          window.location.href = '/';
          
         }
         else{
          showToasterMessage({messageType:"error",description: response?.data?.message})

         }
        }
         else{
          localStorage.removeItem("isLoginAsDemo");
          window.location.reload();
          window.location.href = '/';
         }
        };

      export const logOut =(username:string)=>{

      console.log("LOGOUT9999999",username);
          signoutUser(username)
         
       
      }