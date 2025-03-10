import { WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import logo from '../../../public/LOGO VIDA DE PET.png' 
import { Grid } from 'lucide-react'
import Image from 'next/image'
import logo2 from '../../../public/logo2.png'

export function Hero(){
    return(
        <section className="bg-gradient-to-r from-[#15969b] via-[#14c1c7] to-[#25b1b6] text-white relative overflow-hidden">       

        <div>
            <Image
                src={logo}  
                alt='Logo Vida de Pets'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 lg:hidden'
            />
            <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
                <div className="space-y-6">
                    
                    <h1 
                    data-aos="fade-down"
                    className="text-3xl md:text4xl lg:text-5xl font-bold leading-10" 
                    >
                    Seu pet merece cuidado, carinho e atenção especial.
                    </h1>
                    
                    <p className="lg:text-lg" data-aos="fade-left">
                    Oferecemos os melhores serviços para garantir o bem-star e a felicidade do seu amigo de quatro patas.
                    </p>

                    <div>
                        <a 
                        data-aos="fade-right"
                        data-aos-delay="500"
                        target='_blank'
                        href={'https://wa.me/555499508873?text= Olá, vim pelo site e gostaria de mais informações...'} 
                        className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogo className='w-5 h-5'/>
                            Entre em contato via WhatsApp
                        </a>
                    </div>
                </div>
                
                <div className="hidden md:block h-full relative">
                    <Image
                        src={logo}
                        alt='Logo Vida de Pet'
                        className='object-contain'
                        fill   
                        sizes="(max-width: 768px) 0vw, 50vw"
                        quality={100}
                        priority
                    />
                </div>
            </article>
        </div>

        </section>
    )
}