"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Script from 'next/script'
import { Initiate , getPaymentInfo } from '@/actions/useractions'

const Paymentpage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentForm, setPaymentForm] = useState({});
    const [paymentInformations, setpaymentInformations] = useState([])

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
    }

    const pay = async (e) => {
        e.preventDefault();
        let a = await Initiate(paymentForm.amount, username, paymentForm)
        let OrderID = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_ID,
            "amount": paymentForm.amount,
            "currency": "INR",
            "name": "iFunder",
            "description": "One Step Ahead For Making Better Future",
            "image": session.user.image,
            "order_id": OrderID,
            "callback_url": `${process.env.NEXT_PUBLIC_HOST}/api/razorpay`,
            "prefill": {
                "name": session.user.name,
                "email": session.user.email,
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open()
    }

    const getData = async () => {
        let data = await getPaymentInfo(username);
        let res = JSON.parse(data)
        console.log(res);
        setpaymentInformations(res)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            {/* Cover and Profile Picture  */}
            <div className="cover relative w-auto">
                <img className='w-full h-[560px]' src="/hacker_img.jpg" alt="Image Not Found" />
                <div className='absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full border-2 border-white -bottom-12'>
                    {session && <img height={120} width={120} className='rounded-full' src={`${session.user.image}?"/${session.user.image}":"/profile.gif"`} alt="" />}
                </div>
            </div>

            {/* Text-Section  */}
            <div className="text my-16 flex flex-col items-center justify-center gap-4">
                <div><h2 className='text-lg md:text-3xl font-bold'>@{username}</h2></div>
                <div className='text-sm md:text-xl font-bold'>creating Authentic Law Enforcement Content</div>
                <div className='text-xs md:text-lg font-semibold text-gray-200'>*1,731 members *363 posts</div>
            </div>

            {/* Payment and History Section */}
            <div className='payment_section flex md:flex-row flex-col gap-2 items-center justify-center my-1 lg:my-4'>
                {/* First Container  */}
                <div className='md:w-[45%] w-[90%] bg-[#0000004a] p-2 md:px-5 md:py-3 h-[470px] overflow-y-auto'>
                    <div className="text-xl md:text-2xl font-bold pb-5">People Contribution</div>
                    <div className="box text-sm md:text-xl flex flex-col gap-2">
                        {paymentInformations.map((items) => {
                            if (items.done === true) {
                                return (
                                    <div key={items._id}>
                                        Got <span className='font-bold'>₹{items.amount} from {items.name}</span> {items.message}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

                {/* Second Container */}
                <div className='md:w-[45%] w-[90%] bg-[#0000004a] p-2 md:px-5 md:py-3 h-[470px]'>
                    <div className="text-xl md:text-2xl font-bold pb-5 text-center">Make Payment</div>

                    <form onSubmit={pay} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input onChange={handleChange} name='name' value={paymentForm.name ? paymentForm.name : ""} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="msg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <input onChange={handleChange} name='message' value={paymentForm.message ? paymentForm.msg : ""} type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter amount</label>
                            <input onChange={handleChange} name='amount' value={paymentForm.amount ? paymentForm.amount : ""} type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
                    </form>
                    <div className="flex gap-2 max-w-sm mx-auto py-8">

                        <button onClick={() => setPaymentForm({ amount: "10" })} className="bg-[#a00acbe6] hover:bg-purple-300 text-white font-semibold py-1 px-2 rounded">
                            ₹10
                        </button>


                        <button onClick={() => setPaymentForm({ amount: "20" })} className="bg-[#a00acbe6] hover:bg-purple-300 text-white font-semibold py-1 px-2 rounded">
                            ₹20
                        </button>


                        <button onClick={() => setPaymentForm({ amount: "30" })} className="bg-[#a00acbe6] hover:bg-purple-300 text-white font-semibold py-1 px-2 rounded">
                            ₹50
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage