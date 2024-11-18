import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave,  FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection=()=>{
    const infoItems =[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:"Free Shipping",
            dedcription:"Get your orders deliverd with no extra const"

        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:"Support 24/7",
            dedcription:"we are here to assist you anything"

        },
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
            title:"100% Money Back",
            dedcription:"Full refund if you are not satisfied"

        }
        ,
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:"Payment Secure",
            dedcription:"your payment information safe with us"

        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:"Discount",
            dedcription:"enjoy the best proces an  our products"

        }
    ]
    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'> 
                {infoItems.map((item,index)=>(
                    <div key={index} 
                    
                    className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md
                    transform transition-transform duration-300 hpver:scale-150 cursor-pointer '
                    >
                        {item.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                        <p className='mt-2 text-gray-600'>{item.dedcription}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default InfoSection;