import React from 'react'
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../editor/Editor'), { ssr: false })
const RTE = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            {/* Centered container with responsive width */}
            <div className='bg-white w-full md:max-w-3xl rounded-lg shadow-lg'>
                {/* Header */}
                <div className='bg-[#f0e6ff] px-4 py-3 rounded-t-lg'>
                    <h1 className='text-md font-semibold text-gray-800'>Text Editor</h1>
                </div>

                {/* Editor Content */}
                <div className='p-6'>
                    <Editor />
                </div>
            </div>
        </div>
    )
}

export default RTE
