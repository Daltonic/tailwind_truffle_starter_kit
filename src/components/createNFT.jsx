import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import messiPng from '../assets/messi.png'
import { useGlobalState } from '../store'

const CreateNFT = () => {
    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [imgBase64, setImgBase64] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title || !description || !price) return

        console.log('Minted...')

        resetForm()
    }

    const closeModal = () => {
        resetForm()

    }

    const resetForm = () => {
        setDescription('')
        setFileUrl('')
        setImgBase64(null)
        setPrice('')
        setTitle('')
    }

  return (
    <div className={'fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-800 ${modal}'}>
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold">Add NFT</p>
                    <button type="button" className="border-0 bg-transparent focus:outline-non">
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                        <img className='h-full w-full object-cover cursor-pointer' 
                        src={imgBase64 || messiPng} 
                        alt="NFT" />
                    </div>
                </div>

                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <label className='block'>
                        <span className='sr-only'>Choose Profile Photo</span>
                        <input className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0'
                        type="file" 
                        accept='image/png, image/jpeg, image/jpeg, image/gif, image/webp' 
                        required />
                    </label>
                </div>

                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input type="text" required className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
                    placeholder='Title' 
                    name='title' 
                    onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>

                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input type="number" required className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
                    placeholder='Price (ETH)' 
                    name='price' 
                    min={0.01} 
                    onChange={(e) => setPrice(e.target.value)} value={price}
                    step={0.01}/>
                </div>

                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <textarea className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 h-20 resize-none' 
                    placeholder='Description' 
                    name='description' 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} value={description}
                    required >

                    </textarea>
                </div>

                <button className='flex justify-center items-center w-full mt-5 text-white shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Load More</button>
            </form>
        </div>
    </div>
  )
}

export default CreateNFT