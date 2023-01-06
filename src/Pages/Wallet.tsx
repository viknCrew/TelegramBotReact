import React from 'react';
import {Link} from "react-router-dom";

// @ts-ignore
const tg = window.Telegram.WebApp;


function Wallet() {
    const logo =  require("../assets/LOGO.png");
    const up = require("../assets/VectUp.png");
    const down = require("../assets/vectDown.png");
    const metaMask = require("../assets/MetaMask_Fox.png");
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
                <Link to={'/send'} className='bg-[#3c3c3c] text-[#6d00f3] py-[7px] flex items-center justify-center shadow-lg rounded-md'>
                    <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
                        <img src={up} className='mx-auto w-[48px] flex justify-center'/>
                        <p className='mx-auto flex justify-cent er'> Send</p>
                    </div>
                </Link>
                <Link to={'/receive'} className='bg-[#3c3c3c] text-[#6d00f3] py-[7px] flex items-center justify-center shadow-lg rounded-md'>
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
                        <img src={metaMask}/>
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
                        <img src={metaMask}/>
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
                        <img src={metaMask}/>
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
