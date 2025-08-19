'use client'
import { useState, useEffect } from 'react'

export default function Redwhitebtn() {
  const [clickedColors, setClickedColors] = useState<string[]>([])
  const [redCount, setRedCount] = useState<number>(0)
  const [whiteCount, setWhiteCount] = useState<number>(0)

  const handleColorClick = (colorName: string) => setClickedColors((prev) => [...prev, colorName])

  useEffect(() => {
    if (clickedColors.length === 0) return;

    const lastColor = clickedColors[clickedColors.length - 1];

    switch (lastColor) {
      case "white":
        setWhiteCount((prev) => prev + 1);
        break;
      case "red":
        setRedCount((prev) => prev + 1);
        break;
      default:
        break;
    }
  }, [clickedColors]);

  return (
    <section className='px-4 h-[calc(100vh-68px)] flex flex-col justify-between '>
      <section className='flex justify-center items-center gap-4'>
        <button
          onClick={() => handleColorClick('red')}
          className='w-20 h-20 rounded-full shadow-xl bg-red-500 border-8 border-stone-800'></button>
        <button
          onClick={() => handleColorClick('white')}
          className='w-20 h-20 rounded-full shadow-xl bg-white border-8 border-stone-800'></button>
      </section>
      <section className='grid grid-cols-12'>
        {
          clickedColors?.map((i, index: number) => <div key={index} className='flex gap-2'>
            <p>{index + 1}.</p>
            <p>{i}</p>
          </div>)
        }
      </section>
      <section className='flex gap-4 justify-end w-full'>
        <p> <span className='font-bold shadow-xl text-red-500'>Kırmızı</span>  tıklanma sayısı {redCount} </p>
        <p> <span className='font-bold shadow-xl'>Beyaz</span>  tıklanma sayısı {whiteCount} </p>
      </section>
    </section>
  )
}