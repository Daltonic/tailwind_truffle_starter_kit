import messiPng from '../assets/messi.png'

const Players = () => {
  return (
    <div className="bg-[#151c25] gradient-bg-players">
        <div className="w-4/5 py-10 mx-auto">
            <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Players</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                {Array(4).fill().map((nft, i) => (<Card key={i} nft={i + 1} />))}
            </div>
            <div className='text-center my-5'>
                <button className='text-white shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Load More</button>
            </div>
        </div>
    </div>
  )
}

const Card = ({nft}) => (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden my-2 p-3 bg-gray-800'>
        <img className='h-80 w-full object-cover shadow-lg shadow-black rounded-lg mb-3' src={messiPng} alt={"NFT Image"} />
        <h4 className='text-white font-semibold'>NFT #{nft}</h4>
        <p className='text-gray-400 text-sm my-1'>
        Messi Messi Messi Immens Messi
        Encara Messi
        Encara Messi
        Encara Messi
        Encara Messi
        Gol Gol Gol Gol Gol Gol Gol Gol Gol 
        </p>
        <div className='flex justify-between items-center mt-3 text-white '>
            <div className='flex flex-col'>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>0.34 ETH</p>
            </div>
            <button className='shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-1'>View Details</button>
        </div>
    </div>
)

export default Players