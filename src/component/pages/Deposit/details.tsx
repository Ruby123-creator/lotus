import React, { useState } from 'react'
import { useDepositAmount } from '../../../Framework/transfer';
import { Button, Upload } from 'antd';
import { TbPhotoUp } from 'react-icons/tb';
import { useUI } from '../../../context/ui.context';
const btns = [300,500,1000,5000,10000,50000]

const DetailsFilled = () => {
    const {userData} = useUI();
    const [sum,setSum] = useState(0);
    const [upiNumber, setUpiNumber] = useState('');
    const [fileName, setFileName] = useState('');
  const [filePath, setFilePath] = useState(null); //
  console.log(filePath,"check");
  const {mutate:deposit} = useDepositAmount();
 const calculateSum = (val:number)=>{
      const netSum = sum +val;
      setSum(netSum);
 }
    return (
        <div className='py-2 w-full'>
        <div className="w-full mt-2.5 py-[15px] rounded-lg bg-bg_Quaternary px-3">
          <div className="font-lato font-bold text-text_Ternary text-base leading-5">
            <p>
              Amount<span className="text-text_Danger">*</span>
            </p>
          </div>
          <div className="w-full mt-2 py-2 grid grid-cols-12 border rounded-[4px] px-2 items-center justify-center border-success ">
            <input
              className="block focus:outline-none  col-span-11 w-full h-max font-lato placeholder:font-lato placeholder:font-normal font-bold text-base"
              placeholder="₹ Enter Amount"
              autoComplete="off"
              min={300}
              max={100000}
              type="number"
              onChange={(e:any)=>{setSum(Number(e.target.value))}}
              value={sum}
            />
            <span className="font-lato font-bold leading-4 text-teranry text-base col-span-1 text-center ">
              INR
            </span>
          </div>
          <span className="text-x pl-1 mt-0 text-text_Ternary font-lato">
            <span>Min 300</span>
            <span className="text-x"> - </span>
            <span>Max 100000</span>
          </span>
          <div className="w-full grid grid-cols-3 gap-[10px] mt-[18px]">
            {
              btns.map((val)=>{
                return(
                  <button
                  className="inline-block  relative overflow-hidden  bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-text_Quaternary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                  type="button"
                  onClick={()=>{
                    calculateSum(val);
                  }}
                >
                  <span>+{val}</span>
                </button>
                )
              })
            }
           
            
          </div>
          <div className="my-2">
            <span className="text-text_Primary text-base font-lato font-[480] leading-4"></span>
          </div>
        </div>
        <div className="w-full mt-2.5 rounded-md bg-bg_Quaternary py-3.5 px-3">
        <div className="font-lato font-bold text-base leading-5">
          Upload your payment slip below
          <span className="text-text_Danger">*</span>
        </div>
        <div className="w-full relative mt-2">
        <Upload
    accept=".jpg,.jpeg,.png,.pdf,.webp"
    showUploadList={false}
    beforeUpload={(file) => {
      setFileName(file.name);
      setFilePath(file as any); // Store full file if needed
      return false; // prevent auto upload if you are manually handling it
    }}
  >
    <Button
      icon={<TbPhotoUp />}
      className="border border-dashed rounded-md py-3 px-4 w-full text-placeHolderUploadFileDeposit"
    >
      Upload or drop a file right here
    </Button>
  </Upload>
  <span className="font-normal text-xs">{fileName}</span>
        </div>
      </div>
        <div className="w-full mt-2.5 bg-bg_Quaternary rounded-md px-3 py-3.5">
          <div className="font-lato font-bold text-sm mb-2 leading-5">
            Unique Transaction Reference
            <span className="text-text_Danger">*</span>
          </div>
          <div className="w-full relative font-lato">
            <input
              className="block w-full focus:outline-none  border-[1px] font-lato px-3 py-2.5 rounded-[4px] font-lato placeholder:font-lato font-semibold text-base  border-quinary focus:border-ternary"
              placeholder="UTR/RRN Number"
              type='text'
              onChange={(e)=>{
                console.log(e,"MINACHIII");
                setUpiNumber(e.target.value)}}
              value={upiNumber}
            />
            <span className="text-text_Danger text-xs font-lato font-[450] leading-4"></span>
          </div>
        </div>
       
        <div className="w-full text-center py-4 px-2">
          <button
            disabled={false}
            type="button"
            className=" relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Primary flex items-center justify-center gap-x-2 w-full text-text_Quaternary h-10 text-base  rounded-md font-[500] leading-4 disabled:bg-bg_Quinary cursor-pointer"
            onClick={(e)=>{
              e.preventDefault();
              const data ={
                name: userData?.UserName,
                amount: sum,
                utr: upiNumber,
                paymentScreenshot: filePath,
              }
              deposit(data);
            }}
          >
            <span>SUBMIT</span>
          </button>
        </div>
        </div>
      )
  
}

export default DetailsFilled