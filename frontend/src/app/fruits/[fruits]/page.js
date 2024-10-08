"use client";

import ImageUpload from '@/components/ImageUpload';
import { useParams,useRouter } from "next/navigation";
import fruitsData from './fruitData.json'
import SmallFooter from '@/components/SmallFooter';
import FruitDetails from '@/components/FruitDetails';
import { useEffect } from 'react';

const Fruits = () => {
    const fruits = useParams().fruits; 
    const fruitData = fruitsData[fruits];
    const router = useRouter();
    useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    }
  }, [router]);

    return (
        <div className='h-screen overflow-y-hidden'>
            <div className=' pt-20 flex justify-between h-[96%] w-full px-8'>
                <FruitDetails fruits={fruits} fruitData={fruitData} />
            <div className='w-[48%]'>
                <ImageUpload type='fruits' name={fruits} />
            </div>
            </div>
            <SmallFooter />
        </div>
        
    );
}

export default Fruits;
