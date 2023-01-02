import tffLogo from '../assets/tff01.png'

const Footer = () => (
    <div className='w-full flex flex-col justify-between md:justify-center items-center gradient-bg-footer p-4'>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
            <div className='flex flex-[0.25] justify-center items-center'>
                <img className='w-32' src={tffLogo} alt="Logo" />
            </div>
            <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-center'>
                <p className='cursor-pointer'>Market</p>
                <p className='cursor-pointer'>Artists</p>
                <p className='cursor-pointer'>Features</p>
                <p className='cursor-pointer'>Community</p>
            </div>
            <div className='flex flex-[0.25] justify-center items-center'>
                <p className='text-white text-right text-sm'>&copy;2023 All rights reserved.</p>
            </div>
        </div>
    </div>
)

export default Footer