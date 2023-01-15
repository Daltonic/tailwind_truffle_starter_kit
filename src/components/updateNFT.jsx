import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import messiPng from '../assets/messi.png'
import { setGlobalState, useGlobalState } from '../store'

const UpdateNFT = () => {
    const [modal] = useGlobalState('updateModal')
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!price) return

        console.log('Updated...')

        closeModal()
    }

    const closeModal = () => {
        setGlobalState('updateModal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setPrice('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold">Candy NFT</p>
                    <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-non">
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                        <img className='h-full w-full object-cover cursor-pointer' 
                        src={messiPng} 
                        alt="NFT" />
                    </div>
                </div>

                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input type="number" required className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
                    placeholder='Price (ETH)' 
                    name='price' 
                    min={0.01} 
                    onChange={(e) => setPrice(e.target.value)} value={price}
                    step={0.01}/>
                </div>

                <button className='flex justify-center items-center w-full mt-5 text-white shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Update Now</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateNFT