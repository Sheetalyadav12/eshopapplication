import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Checkout({setOrder}) {
    const[billingToggle,setBillingToggle] = useState(true)
    const[shippingToggle,setShippingToggle] = useState(false)
    const[payment,setPayment] = useState(false)
    const[paymentMethod,setPaymentMethod] = useState("cash on delevery")
    const cart = useSelector(state =>state.cart)
    const[shippinginfo,setShippinginfo]=useState({
        adress:'',
        city:'',
        Zipcode:''
        
        
    })
    const navigate= useNavigate()
    const handleOrder =()=>{
        const newOrder ={
            products:cart.products,
            ordernumber:"123456",
            shippingInformation:shippinginfo,
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }
    



  return (
<div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
       

            <h3 className='text-2xl font-semibold mb-4'>Checkout</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                <div className='border p-2 mb-6'>
                    <div className='flex items-center justify-between'
                    onClick={()=>setBillingToggle(!billingToggle)}>
                        <h3 className='text-lg font-semibold mb-2'>Billing Infomation</h3>
                         {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-4 ${billingToggle ? "" :"hidden"}`}>
                        <div>
                            <label  className='block text-gray-700' htmlFor=''>Name</label>
                            <input type='text' name="name" placeholder='Enter Name' className='w-full px-3 py-2 border'/>
                        </div>
                    
                    <div>
                        <div>
                            <label className='block text-gray-700' htmlFor=''>Email</label>
                            <input type='email' placeholder='Enter Email' name='email' className='w-full px-3 py-2 border'/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='block text-gray-700' htmlFor=''>Phone</label>
                            <input type='text'  placeholder='Enter phone' name='phone' className='w-full px-3 py-2 border'/>
                        </div>
                    </div>
                    </div>

                </div>
                {/* shipping information */}
                <div className='border p-2 mb-6'>
                    <div className='flex items-center justify-between'
                    onClick={()=>setShippingToggle(!shippingToggle)}>
                        <h3 className='text-lg font-semibold mb-2'>Shipping Infomation</h3>
                         {shippingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-4 ${shippingToggle ? "" :"hidden"}`}>
                        <div>
                            <label  className='block text-gray-700' htmlFor=''>Adress</label>
                            <input type='text' name="Adress" placeholder='Enter Adrerss' className='w-full px-3 py-2 border'
                            onChange={(e) =>setShippinginfo({...shippinginfo,adress:e.target.value})}/>
                        </div>
                    
                    <div>
                        <div>
                            <label className='block text-gray-700' htmlFor=''>City</label>
                            <input type='email' placeholder='Enter City' name='city' className='w-full px-3 py-2 border'
                             onChange={(e) =>setShippinginfo({...shippinginfo,city:e.target.value})}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='block text-gray-700' htmlFor=''>Zip-Code</label>
                            <input type='text'  placeholder='Enter Zip-Code' name='Zipcode' className='w-full px-3 py-2 border'
                             onChange={(e) =>setShippinginfo({...shippinginfo,Zipcode:e.target.value})}/>
                        </div>
                    </div>
                    </div>

                </div>
                {/* payment */}
                <div className='border p-2 mb-6'>
                    <div className='flex items-center justify-between'
                    onClick={()=>setPayment(!payment)}>
                        <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                         {payment ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-4 ${payment ? "" :"hidden"}`}>
                        <div className='flex items-center mb-2'>
                            <input type='radio' name="payment"  checked={paymentMethod == "cod"}
                            onChange={()=>setPaymentMethod("cod")}/>
                            <label  className='block text-gray-700 ml-2' htmlFor='' >
                                Cash On Delivery
                            </label>

                        </div>

                        <div className='flex items-center mb-2'>
                            <input type='radio' name="payment"  checked={paymentMethod == "dc"}
                            onChange={()=>setPaymentMethod("dc")}/>
                            <label  className='block text-gray-700 ml-2' htmlFor=''>
                                Debit card
                          </label>

                        </div>
                        {paymentMethod === "dc" && (
                            <div className='bg-gray-100 p-4nrounded-lg mb-4'>
                                <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 font-semibold mb-2'>Card No</label>
                                    <input type='text' placeholder=' Enter Card No' className='border p-2 w-full rounded' required/>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 font-semibold mb-2'>Card Holed Name</label>
                                    <input type='text' className='border p-2 w-full rounded' required/>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <div className='w-1/2 mr-2'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Expire date</label>
                                        <input type='text'
                                        placeholder='MM/YY'
                                        className='border p-2 w-full rounded '
                                        required
                                        
                                        />
                                    </div>
                                    <div className='w-1/2 mr-2'>
                                        <label className='block text-gray-700 font-semibold mb-2'>CW</label>
                                        <input type='text'  placeholder='CW'
                                        className='border p-2 w-full rounded '
                                        required/>

                                    </div>
                                </div>
                                </div>
                        )}
                    
                  
                   
                    </div>

                </div>
                  
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                <div className='space-y-4'>
                    {cart.products.map((product) =>(
                        <div key={product.id} className='flex justify-between'>
                            <div className='text items-center'>
                                <img src={product.image} className='w-16 h-16 object-contain rounded'/>
                                <div className='ml-4'>
                                    <h4 className='text-md font-semibold'>{product.name}</h4>
                                    <p className='text-gray-600'>${product.price} * {product.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='mt-4 border-t pt-4'>
                    <div className='flex justify-between' >
                        <span>Total Price:</span>
                        <span className='font-semibold'>{cart.totalPrice.toFixed(2)}</span>

                    </div>
                </div>
                <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                onClick={handleOrder}
                
                >Place Order</button>
                    
                    
                </div>


                </div>
              
 
    </div>  )
}

export default Checkout