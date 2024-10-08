"use client";

import ImageUpload from '@/components/ImageUpload';
import { useParams,useRouter } from "next/navigation";
import vegetables from './vegetables.json'
import SmallFooter from '@/components/SmallFooter';
import VegetablesDetails from '@/components/VegetablesDetails';
import { useEffect } from 'react';

const Vegetables = () => {
    const veg = useParams().vegetables;
    const vegetablesData = vegetables[veg];
    console.log(veg);
    console.log(vegetablesData);
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
                <VegetablesDetails vegetable={veg} vegetableData={vegetablesData} />
            <div className='w-[48%]'>
                <ImageUpload type='vegetables' name={veg} />
            </div>
            </div>
            <SmallFooter />
        </div>
        
    );
}

export default Vegetables;
