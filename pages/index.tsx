import type { NextPage } from 'next'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    
     <div className='min-h-screen'>
      <Header />
      {/* <SwapCryptoModal /> */}
      <div className='mt-10' />
      {/* <Trending /> */}
      <div className='mt-20' />
      {/* <CMCtable /> */}
    </div>
    
  )
}

export default Home
// import CMCtable from '../components/cmc-table/cmcTable'
// import Header from '../components/header'
// import Trending from '../components/trending'
// import SwapCryptoModal from '../components/swapCryptoModal'

// export default function Home() {
//   return (
//     <div className='min-h-screen'>
//       <Header />
//       {/* <SwapCryptoModal /> */}
//       <div className='mt-10' />
//       {/* <Trending /> */}
//       <div className='mt-20' />
//       {/* <CMCtable /> */}
//     </div>
//   )
// }
