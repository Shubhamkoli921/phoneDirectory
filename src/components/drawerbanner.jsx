import React, { useEffect, useState } from 'react'
import Footer from './footer'
import Rotary from './rotary'
import Navbar from './navbar'
import anilparmar from '../assets/anilparmar.jpeg'
// import axios from 'axios'
// import { useFetcher } from 'react-router-dom'


const DrawerBanner = ({ id }) => {

    const [data,setData] = useState([])
    useEffect(() => {
        ShowPending();
    }, [])


    const ShowPending = async () => {
        let FormData ={
            formdata: [
                {
                    key: "sub_menu_id",
                    value: "6",
                    type: "text"
                }
            ]
            // key:'sub_menu_id',
            // value:"6",
            // type:"text"
            
        }
        console.log("formdata values ",FormData)
        await fetch('https://rslsolution.com/Rotary_directory/admin/api/getSubMenuDetail', {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(res => res.json())
            .then(resData => {
                console.log('resData______data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', resData);
                setData(resData.data);
            })
            .catch(error => console.log('error', error));
    };
    return (
        <>
            <Navbar />
            <Rotary />
            <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px]  items-center p-2 ml-5 text-blue-950'>Id : {console.log("drawwerbanner", id)}{id}</h1>
            {/* {console.log("drawwer api test ", data)} */}
            {console.log("show me ",data)}
            <div className='max-w-[1640px] mx-auto p-4 items-center w-full h-full '>
                {/* {card} */}
                <div className='rounded-xl relative lg:max-h-[500px] md:max-h-[600px]' id='banner-relative'>
                    {/* {overlay} */}
                    <div  className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <div></div>
                            <div className='flex mx-auto w-full justify-end items-center p-2'>
                                <img className="max-h-[300px] lg:max-h-[120px] sm:max-h-[120px] w-[100px] object-cover rounded-xl" src={anilparmar} alt='img' id='imgp' />
                            </div>
                        </div>
                        <p className='font-bold text-2xl px-2 pt-4'>Dear Fello Rotarians</p>
                        <br />
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus inventore ducimus nobis obcaecati assumenda qui nostrum neque, minima vitae optio impedit rem! Beatae fuga doloribus, quam ab consequatur distinctio.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus soluta vel quam eius laudantium nihil, nesciunt alias, minus, sint eaque dignissimos perferendis accusantium. Inventore, error. Autem iste laboriosam incidunt.</p>
                        <br />
                        <p className='px-2'>Kind Regards,</p>
                        <br />
                        <p className='px-2'>Sagar Mehta</p>
                        <p className='px-2'>Rotary Internantional President</p>
                    </div>
                    {/* <img id='imgw' className='lg:max-h-[500px] md:max-h-[560px] w-full object-cover rounded-xl' src='https://www.vhv.rs/dpng/d/427-4270980_geometric-background-png-background-geometric-design-png-transparent.png' alt='/'/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DrawerBanner