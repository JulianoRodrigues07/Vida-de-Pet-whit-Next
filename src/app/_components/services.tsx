"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, Hotel, Clock} from 'lucide-react'
import{ WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {
        title: "Banho & Tosa",
        description:"Inclui banho com produtos específicos para o tipo de pelagem, banho terapêutico, hidratação, corte de unhas, limpeza dos ouvidos, tosa geral, higiênica, desembolo e remoção de sub pelos. Produtos exclusivos HYDRA.",
        duration: "1h",
        icon: <Scissors/>,
        linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações..."

    },
    {
        title: "Atendimento Veterinário",
        description:"Oferece atendimento clínico e oncológico para cuidar da saúde do seu animal. Realização de exames de imagem como ultrassom, raio x e exames laboratoriais, aplicação de vacinas e venda de medicamentos.",
        duration: "1h",
        icon: <Syringe/>,
        linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações..."

    },
    {
        title: "Hotel $ Creche",
        description:"Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis, livres de gaiola e com acompanhamento veterinário 24 horas. Ambiente externo com muros altos e área verde de mais de 400 mt2.",
        duration: "24h",
        icon: <Hotel/>,
        linkText: "Olá, vi no site sobre Hotel e Creche e gostaria de mais informações..."

    },
    
]

export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)": { slidesToScroll: 3}
        }
    })


    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl text-center font-bold mb-12">Nossos Serviços</h2>
                
                <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4'></Clock>
                                                <span>{item.duration}</span>
                                            </div>

                                            <a target='_blank'
                                                href={`https://wa.me/555499508873?text= Olá, vim pelo site e gostaria de mais informações sobre ${item.title}`} 
                                                className=' flex items-center justify-center gap-2 hover:bg-cyan-400 px-4 py-4 rounded-md duration-300'>
                                                
                                                <WhatsappLogo className='h-5 w-5'/>
                                                Entrar em contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={scrollPrev}
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft 
                            className='w-6 h-6 text-gray-600'/>
                    </button>

                    <button 
                        onClick={scrollNext}
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight 
                            className='w-6 h-6 text-gray-600'/>
                    </button>
                </div>

            </div>
        </section>
    )
}