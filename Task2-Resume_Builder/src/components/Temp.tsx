import React, { useState } from 'react'
import FillData from './Filldata'
import Navbar from './Navbar'
import Footer from './Footer';
import Temp1 from './Temp1';
import Temp2 from './Temp2';


function Temp() {

    const [showFillData, setShowFillData] = useState(false);

    const handleBack = () => {
        setShowFillData(true);
    };


    return (
        <>
            {showFillData ? (
                <FillData />
            ) : (
                <>
                    <div className='flex flex-col bg-fuchsia-50'>
                        
                        
                        
                            <div className='mt-14'><Temp1/></div>
                            <div><Temp2/></div>
                        
                    


                        <button onClick={handleBack} className="mx-auto mb-20 p-2 bg-gray-900 text-white rounded">Back</button>
                        
                    </div>

                </>
            )}








        </>
    )
}

export default Temp