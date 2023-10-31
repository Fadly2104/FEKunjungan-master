import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import ReviewTable from '../../partials/review/ReviewTable'
import { FaArrowCircleLeft } from 'react-icons/fa';

// Import utilities   
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
  
function DetailReviewCard01() {
    const history = useNavigate()
    const location = useLocation();
    // const history = useNavigate()

  return (
    <>
    <div className='back-review'>
      <button onClick={() => history(-1)}>
        <FaArrowCircleLeft size={30} /> {/* Ganti 30 dengan ukuran yang Anda inginkan */}
      </button>
    </div>
    <div className="flex flex-col col-span-full sm:col-span-6 md:col-span-12 xl:col-span-12 pb-7 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
        </header>
        {/* <h2 className="text-lg text-center font-semibold text-slate-800 dark:text-slate-100 mb-4">Denah Letak Ruangan</h2> */}
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
        {/* <div className="flex"> */}
          {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Orang</div> */}
          <table className='w-full min-w-max table-auto text-left'>
            <tbody>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Tiket:</th>
                    <td className='py-5 border-b border-blue-gray-50'>666</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Nama:</th>
                    <td className='py-5 border-b border-blue-gray-50'>Anton Szandor LaVey</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Ruangan:</th>
                    <td className='py-5 border-b border-blue-gray-50'>Ruang Collaboration</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Kepentingan:</th>
                    <td className='py-5 border-b border-blue-gray-50'>Meeting</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Review dibuat pada Waktu:</th>
                    <td className='py-5 border-b border-blue-gray-50'>09:27 24/10/2023</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Rating:</th>
                    <td className='py-5 border-b border-blue-gray-50'><ReviewTable /></td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
    </>
  );
}

export default DetailReviewCard01;