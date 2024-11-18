// import React from 'react'

// function Order({order}) {
//   return (
//     <div>
//         <h2>Thanku Your Order</h2>
//         <p>Your Order Has Been placed succesfully you will recievs an email can</p>
//         <div>
//             <h3>
//                 Order Summary
//             </h3>
//             <p>Order Number:{order.orderNumber}</p>
//             <div>
//                 <h2>Shiffinfg Information</h2>
//                         <p>{order.shippingInformation.adress}</p>
//                 <p>{order.shippingInformation.city}</p>
//                 <p>{order.shippingInformation.Zipcode}</p>


//             </div>
//             <div>
//                 <h3>Products Order</h3>
//                 {order.products.map((product)=>(
//                     <div>
//                         <p>{product.name} * {product.quantity}</p>
//                         <p>{product.price * product.quantity}</p>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <span>Total Pr</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Order