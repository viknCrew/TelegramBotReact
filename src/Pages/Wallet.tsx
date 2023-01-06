import React from 'react';
import {Link} from "react-router-dom";

// @ts-ignore
const tg = window.Telegram.WebApp;


function Wallet() {
    const logo =  require("../assets/LOGO.png");
    const up = require("../assets/VectUp.png");
    const down = require("../assets/vectDown.png");
    return (
        <div className="grid grid-col-1 gap-6 w-full mx-[10px] mr-[10px]">
            <div className='flex justify-center items-start '>
                <div className='bg-[#6D00F3] w-[250PX]  h-[200px] rounded-b-full flex justify-center items-center shadow-lg'>
                    <img src={logo}/>
                </div>
            </div>
            <div className="Wallet w-full h-[150px] bg-[#3C3C3E] rounded-xl shadow-lg">
                <div className='flex justify-center items-start mt-[15px] font-black text-2xl'>Wallet</div>
                <div className='text-[#d7d7d7] font-smail text-xs ml-[30px]'>xc6D3720f6286C5173C94523b8b02d549c9933662</div>
                <div className ='flex items-center ml-[30px]'>
                    <img src={logo} className="w-[25px]"/>
                    <p className='font-medium text-lg'>20.4570015 TMY ≈</p>
                </div>
                <p className = "text-[#d7d7d7] text-sm ml-[30px]">$ 30.3202 USDT</p>
            </div>
            <div className = "grid gap-6 grid-cols-2">
                <Link to={'/Send'} className='bg-[#3c3c3c] text-[#6d00f3] py-[7px] flex items-center justify-center shadow-lg rounded-md'>
                    <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
                        <img src={up} className='mx-auto w-[48px] flex justify-center'/>
                        <p className='mx-auto flex justify-center'> Send</p>
                    </div>
                </Link>
                <Link to={'/Receive'} className='bg-[#3c3c3c] text-[#6d00f3] py-[7px] flex items-center justify-center shadow-lg rounded-md'>
                <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
                    <img src={down} className='mx-auto  w-[48px] flex justify-center'/>
                    <p className='mx-auto flex justify-center'> Receive</p>
                </div>
            </Link>
            </div>
            <div className='bg-[#3c3c3e] rounded-xl shadow-lg w-full h-[400px] grid grid-cols-1'>
                <p className='text-2xl font-bold flex justify-center mt-2]'> History</p>
                <div className='bg-[#3c3c3e] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4'>
                    <div className='flex'>
                        <svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.6196 6.90836L32.8813 21.2894L36.3465 12.8048L51.6196 6.90836Z" fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.36159 6.90836L26.9492 21.4256L23.6535 12.8048L8.36159 6.90836ZM44.8776 40.2436L39.887 48.1444L50.565 51.1802L53.6346 40.4187L44.8776 40.2436ZM6.38419 40.4187L9.43503 51.1802L20.113 48.1444L15.1224 40.2436L6.38419 40.4187Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.5104 26.8939L16.5349 31.5449L27.1375 32.0314L26.7608 20.258L19.5104 26.8939ZM40.4708 26.8939L33.1262 20.1218L32.8814 32.0314L43.4652 31.5449L40.4708 26.8939ZM20.113 48.1444L26.4784 44.9335L20.9793 40.4965L20.113 48.1444ZM33.5028 44.9335L39.887 48.1444L39.0019 40.4965L33.5028 44.9335Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.887 48.1444L33.5028 44.9335L34.0113 49.2341L33.9548 51.0439L39.887 48.1444ZM20.113 48.1444L26.0452 51.0439L26.0075 49.2341L26.4784 44.9335L20.113 48.1444Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.1393 37.6554L20.8286 36.0402L24.5763 34.2693L26.1393 37.6554ZM33.8418 37.6554L35.4049 34.2693L39.1714 36.0402L33.8418 37.6554Z" fill="#233447"/>
                            <path d="M20.113 48.1444L21.0169 40.2436L15.1224 40.4187L20.113 48.1444ZM38.983 40.2436L39.887 48.1444L44.8776 40.4187L38.983 40.2436ZM43.4652 31.5449L32.8814 32.0314L33.8606 37.6554L35.4237 34.2693L39.1902 36.0402L43.4652 31.5449ZM20.8286 36.0402L24.5951 34.2693L26.1394 37.6554L27.1375 32.0314L16.5348 31.5449L20.8286 36.0402Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5349 31.5449L20.9793 40.4966L20.8286 36.0402L16.5349 31.5449ZM39.1902 36.0402L39.0019 40.4966L43.4652 31.5449L39.1902 36.0402ZM27.1375 32.0314L26.1394 37.6554L27.3823 44.2913L27.6648 35.5537L27.1375 32.0314ZM32.8814 32.0314L32.3729 35.5342L32.5989 44.2913L33.8607 37.6554L32.8814 32.0314Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.8606 37.6554L32.5989 44.2913L33.5028 44.9335L39.0019 40.4966L39.1902 36.0402L33.8606 37.6554ZM20.8286 36.0402L20.9793 40.4966L26.4783 44.9335L27.3823 44.2913L26.1393 37.6554L20.8286 36.0402Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.9548 51.0439L34.0113 49.2341L33.5405 48.806H26.4407L26.0075 49.2341L26.0452 51.0439L20.113 48.1444L22.1846 49.8958L26.3842 52.9121H33.597L37.8155 49.8958L39.887 48.1444L33.9548 51.0439Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.5028 44.9335L32.5989 44.2913H27.3823L26.4783 44.9335L26.0075 49.2341L26.4407 48.806H33.5405L34.0113 49.2341L33.5028 44.9335Z" fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M52.4105 22.2235L54.0113 14.2837L51.6196 6.90836L33.5028 20.8029L40.4708 26.8939L50.3202 29.8713L52.5047 27.2442L51.5631 26.5436L53.0697 25.123L51.9021 24.189L53.4087 23.0019L52.4105 22.2235ZM5.98871 14.2837L7.58946 22.2235L6.57251 23.0019L8.0791 24.189L6.93033 25.123L8.43692 26.5436L7.4953 27.2442L9.66102 29.8713L19.5104 26.8939L26.4784 20.8029L8.36159 6.90836L5.98871 14.2837Z" fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M50.3202 29.8713L40.4708 26.8939L43.4652 31.5449L39.0019 40.4965L44.8776 40.4187H53.6346L50.3202 29.8713ZM19.5104 26.8939L9.66102 29.8713L6.38419 40.4187H15.1224L20.9793 40.4965L16.5348 31.5449L19.5104 26.8939ZM32.8814 32.0314L33.5028 20.8029L36.3654 12.8048H23.6535L26.4783 20.8029L27.1375 32.0314L27.3635 35.5731L27.3823 44.2913H32.5989L32.6365 35.5731L32.8814 32.0314Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div >
                            <p className='text-lg '>Replenishment via metamask</p>
                            <p className='text-xs text-[#d7d7d7] font-thin'>xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423</p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <p className='text-xs text-[#d7d7d7] font-thin'>December 31 at 18:43</p>
                        <p className='text-[#00FCDE] items-start'> + 20.4570015 TMY </p>
                    </div>
                </div>
                <div className='bg-[#3c3c3e] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4'>
                    <div className='flex'>
                        <svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.6196 6.90836L32.8813 21.2894L36.3465 12.8048L51.6196 6.90836Z" fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.36159 6.90836L26.9492 21.4256L23.6535 12.8048L8.36159 6.90836ZM44.8776 40.2436L39.887 48.1444L50.565 51.1802L53.6346 40.4187L44.8776 40.2436ZM6.38419 40.4187L9.43503 51.1802L20.113 48.1444L15.1224 40.2436L6.38419 40.4187Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.5104 26.8939L16.5349 31.5449L27.1375 32.0314L26.7608 20.258L19.5104 26.8939ZM40.4708 26.8939L33.1262 20.1218L32.8814 32.0314L43.4652 31.5449L40.4708 26.8939ZM20.113 48.1444L26.4784 44.9335L20.9793 40.4965L20.113 48.1444ZM33.5028 44.9335L39.887 48.1444L39.0019 40.4965L33.5028 44.9335Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.887 48.1444L33.5028 44.9335L34.0113 49.2341L33.9548 51.0439L39.887 48.1444ZM20.113 48.1444L26.0452 51.0439L26.0075 49.2341L26.4784 44.9335L20.113 48.1444Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.1393 37.6554L20.8286 36.0402L24.5763 34.2693L26.1393 37.6554ZM33.8418 37.6554L35.4049 34.2693L39.1714 36.0402L33.8418 37.6554Z" fill="#233447"/>
                            <path d="M20.113 48.1444L21.0169 40.2436L15.1224 40.4187L20.113 48.1444ZM38.983 40.2436L39.887 48.1444L44.8776 40.4187L38.983 40.2436ZM43.4652 31.5449L32.8814 32.0314L33.8606 37.6554L35.4237 34.2693L39.1902 36.0402L43.4652 31.5449ZM20.8286 36.0402L24.5951 34.2693L26.1394 37.6554L27.1375 32.0314L16.5348 31.5449L20.8286 36.0402Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5349 31.5449L20.9793 40.4966L20.8286 36.0402L16.5349 31.5449ZM39.1902 36.0402L39.0019 40.4966L43.4652 31.5449L39.1902 36.0402ZM27.1375 32.0314L26.1394 37.6554L27.3823 44.2913L27.6648 35.5537L27.1375 32.0314ZM32.8814 32.0314L32.3729 35.5342L32.5989 44.2913L33.8607 37.6554L32.8814 32.0314Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.8606 37.6554L32.5989 44.2913L33.5028 44.9335L39.0019 40.4966L39.1902 36.0402L33.8606 37.6554ZM20.8286 36.0402L20.9793 40.4966L26.4783 44.9335L27.3823 44.2913L26.1393 37.6554L20.8286 36.0402Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.9548 51.0439L34.0113 49.2341L33.5405 48.806H26.4407L26.0075 49.2341L26.0452 51.0439L20.113 48.1444L22.1846 49.8958L26.3842 52.9121H33.597L37.8155 49.8958L39.887 48.1444L33.9548 51.0439Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.5028 44.9335L32.5989 44.2913H27.3823L26.4783 44.9335L26.0075 49.2341L26.4407 48.806H33.5405L34.0113 49.2341L33.5028 44.9335Z" fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M52.4105 22.2235L54.0113 14.2837L51.6196 6.90836L33.5028 20.8029L40.4708 26.8939L50.3202 29.8713L52.5047 27.2442L51.5631 26.5436L53.0697 25.123L51.9021 24.189L53.4087 23.0019L52.4105 22.2235ZM5.98871 14.2837L7.58946 22.2235L6.57251 23.0019L8.0791 24.189L6.93033 25.123L8.43692 26.5436L7.4953 27.2442L9.66102 29.8713L19.5104 26.8939L26.4784 20.8029L8.36159 6.90836L5.98871 14.2837Z" fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M50.3202 29.8713L40.4708 26.8939L43.4652 31.5449L39.0019 40.4965L44.8776 40.4187H53.6346L50.3202 29.8713ZM19.5104 26.8939L9.66102 29.8713L6.38419 40.4187H15.1224L20.9793 40.4965L16.5348 31.5449L19.5104 26.8939ZM32.8814 32.0314L33.5028 20.8029L36.3654 12.8048H23.6535L26.4783 20.8029L27.1375 32.0314L27.3635 35.5731L27.3823 44.2913H32.5989L32.6365 35.5731L32.8814 32.0314Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div >
                            <p className='text-lg '>Replenishment via metamask</p>
                            <p className='text-xs text-[#d7d7d7] font-thin'>xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423</p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <p className='text-xs text-[#d7d7d7] font-thin'>December 31 at 18:43</p>
                        <p className='text-[#00FCDE] items-start'> + 20.4570015 TMY </p>
                    </div>
                </div>
                <div className='bg-[#3c3c3e] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4'>
                    <div className='flex'>
                        <svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.6196 6.90836L32.8813 21.2894L36.3465 12.8048L51.6196 6.90836Z" fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.36159 6.90836L26.9492 21.4256L23.6535 12.8048L8.36159 6.90836ZM44.8776 40.2436L39.887 48.1444L50.565 51.1802L53.6346 40.4187L44.8776 40.2436ZM6.38419 40.4187L9.43503 51.1802L20.113 48.1444L15.1224 40.2436L6.38419 40.4187Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.5104 26.8939L16.5349 31.5449L27.1375 32.0314L26.7608 20.258L19.5104 26.8939ZM40.4708 26.8939L33.1262 20.1218L32.8814 32.0314L43.4652 31.5449L40.4708 26.8939ZM20.113 48.1444L26.4784 44.9335L20.9793 40.4965L20.113 48.1444ZM33.5028 44.9335L39.887 48.1444L39.0019 40.4965L33.5028 44.9335Z" fill="#0ABAB5" stroke="#0ABAB5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.887 48.1444L33.5028 44.9335L34.0113 49.2341L33.9548 51.0439L39.887 48.1444ZM20.113 48.1444L26.0452 51.0439L26.0075 49.2341L26.4784 44.9335L20.113 48.1444Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.1393 37.6554L20.8286 36.0402L24.5763 34.2693L26.1393 37.6554ZM33.8418 37.6554L35.4049 34.2693L39.1714 36.0402L33.8418 37.6554Z" fill="#233447"/>
                            <path d="M20.113 48.1444L21.0169 40.2436L15.1224 40.4187L20.113 48.1444ZM38.983 40.2436L39.887 48.1444L44.8776 40.4187L38.983 40.2436ZM43.4652 31.5449L32.8814 32.0314L33.8606 37.6554L35.4237 34.2693L39.1902 36.0402L43.4652 31.5449ZM20.8286 36.0402L24.5951 34.2693L26.1394 37.6554L27.1375 32.0314L16.5348 31.5449L20.8286 36.0402Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5349 31.5449L20.9793 40.4966L20.8286 36.0402L16.5349 31.5449ZM39.1902 36.0402L39.0019 40.4966L43.4652 31.5449L39.1902 36.0402ZM27.1375 32.0314L26.1394 37.6554L27.3823 44.2913L27.6648 35.5537L27.1375 32.0314ZM32.8814 32.0314L32.3729 35.5342L32.5989 44.2913L33.8607 37.6554L32.8814 32.0314Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.8606 37.6554L32.5989 44.2913L33.5028 44.9335L39.0019 40.4966L39.1902 36.0402L33.8606 37.6554ZM20.8286 36.0402L20.9793 40.4966L26.4783 44.9335L27.3823 44.2913L26.1393 37.6554L20.8286 36.0402Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.9548 51.0439L34.0113 49.2341L33.5405 48.806H26.4407L26.0075 49.2341L26.0452 51.0439L20.113 48.1444L22.1846 49.8958L26.3842 52.9121H33.597L37.8155 49.8958L39.887 48.1444L33.9548 51.0439Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.5028 44.9335L32.5989 44.2913H27.3823L26.4783 44.9335L26.0075 49.2341L26.4407 48.806H33.5405L34.0113 49.2341L33.5028 44.9335Z" fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M52.4105 22.2235L54.0113 14.2837L51.6196 6.90836L33.5028 20.8029L40.4708 26.8939L50.3202 29.8713L52.5047 27.2442L51.5631 26.5436L53.0697 25.123L51.9021 24.189L53.4087 23.0019L52.4105 22.2235ZM5.98871 14.2837L7.58946 22.2235L6.57251 23.0019L8.0791 24.189L6.93033 25.123L8.43692 26.5436L7.4953 27.2442L9.66102 29.8713L19.5104 26.8939L26.4784 20.8029L8.36159 6.90836L5.98871 14.2837Z" fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M50.3202 29.8713L40.4708 26.8939L43.4652 31.5449L39.0019 40.4965L44.8776 40.4187H53.6346L50.3202 29.8713ZM19.5104 26.8939L9.66102 29.8713L6.38419 40.4187H15.1224L20.9793 40.4965L16.5348 31.5449L19.5104 26.8939ZM32.8814 32.0314L33.5028 20.8029L36.3654 12.8048H23.6535L26.4783 20.8029L27.1375 32.0314L27.3635 35.5731L27.3823 44.2913H32.5989L32.6365 35.5731L32.8814 32.0314Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div >
                            <p className='text-lg '>Replenishment via metamask</p>
                            <p className='text-xs text-[#d7d7d7] font-thin'>xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423</p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <p className='text-xs text-[#d7d7d7] font-thin'>December 31 at 18:43</p>
                        <p className='text-[#00FCDE] items-start'> + 20.4570015 TMY </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wallet;
