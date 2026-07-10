import Image from 'next/image'
import Button from '../common/ui/button'

const Hero = () => {
    return (
        <div className=' tracking-wider text-white h-[85vh] mt-4  w-[100%] relative flex justify-center items-center'>

            <div className='absolute inset-0'>
                <Image
                    loading='eager'
                    src={'/hero.jpg'}
                    height={1000}
                    width={1000}
                    alt='hero image'
                    className='h-full w-full'

                />
            </div>
            {/* overlay */}
            <div className='absolute inset-0 bg-black/40' ></div>
            {/*  */}
            <div className='h-fit w-110 absolute '>
                {/* heading */}
                <h1 className='text-4xl font-bold'>Come Here for the Best</h1>
                {/* sub heading */}
                <p className='text-[14px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis iure suscipit, aliquam incidunt, facere, vero sapiente minima ratione fugit rem. Aut repudiandae sed.</p>
                {/* button */}
                <div className='mt-6 w-50 mx-auto'>
                    <Button
                        label='Shop Now'
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero