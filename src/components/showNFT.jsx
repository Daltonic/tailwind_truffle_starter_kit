import {FaTimes} from 'react-icons/fa'
import Identicon from 'react-identicons'
import messiPng from '../assets/messi.png'
import { setGlobalState, useGlobalState } from '../store'

const ShowNFT = () => {
    const [modal] = useGlobalState('showModal')

    const handleSubmit = () => {

        closeModal()
    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <div className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold">Buy NFT</p>
                    <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-non">
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 h-40 w-40 rounded-xl overflow-hidden'>
                        <img className='h-full w-full object-cover cursor-pointer' 
                        src={messiPng} 
                        alt="NFT" />
                    </div>
                </div>

                <div className='flex flex-col justify-start rounded-xl mt-5'>
                    <h4 className='text-white font-semibold'>Title</h4>
                    <p className='text-gray-400 text-xs my-1'>Messi Messi Messi Immens Messi Encara Messi Encara Messi Encara Messi Encara Messi Gol Gol Gol Gol Gol Gol Gol Gol Gol</p>
                    <div className='flex justify-between items-center mt-3 text-white'>
                        <div className='flex justify-start items-center'>
                            <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={'3223da'} size={50}/>
                            <div className='flex flex-col justify-center items-start'>
                                <small className='text-white font-bold'>@Owner</small>
                                <small className='text-pink-800 font-semibold'>0x31...03f2</small>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <small className='text-xs'>Current Price</small>
                            <p className='text-sm font-semibold'>0.34 ETH</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center space-x-2'>
                    <button className='flex justify-center items-center w-full mt-5 text-white shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Purchase</button>
                    {/* <button className='flex justify-center items-center w-full mt-5 text-white shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Change Price</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowNFT