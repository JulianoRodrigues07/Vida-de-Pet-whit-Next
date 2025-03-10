import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import granPlus from '../../../public/granPlus.png'
import pedigree from '../../../public/pedigree.png'
import threeDogs from '../../../public/threeDogs.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
const brands = [
    { name: "Pedigree", logo: pedigree },
    { name: "Golden", logo: golden },
    { name: "Gran Plus", logo: granPlus },
    { name: "Three Dogs", logo: threeDogs },
    { name: "Whiskas", logo: whiskas },
    { name: "Primier", logo: primier },
]

export function Footer (){ 
    return(
        <section className="bg-gradient-to-r from-[#15969b] via-[#14c1c7] to-[#25b1b6] py-16 text-white">
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/80 pb-8'>
                    <h4 className='text-3xl front-bold mb-8 text-center'> Marcas que trabalhamos </h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (

                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    className='object-contain'
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Vida de pets petshop</h3>
                            <p className='mb-4'>Cuidado do meu melhor amigo com amor e dedicação.</p>
                            <a target='_blank'
                                href={'https://wa.me/555499508873?text= Olá, vim pelo site e gostaria de mais informações...'} className='bg-green-500 px-4 py-2 rounded-md'>
                                Contato via WhatsApp
                            </a>
                        </div>

                        <div className='flex gap-5 justify-center items-center px-20'>
                            <a href="https://www.instagram.com/vidadepets.pf/" target='_blank'>
                                <InstagramLogo className='w-12 h-12'/>
                            </a>   
                            <a href="https://www.facebook.com/profile.php?id=61560042140639&locale=pt_BR#" target='_blank'>
                                <FacebookLogo className='w-12 h-12'/>
                            </a> 
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2 '>Contatos</h3>
                            <p>R. Vacaria, 75 - Vila Vera Cruz, Passo Fundo - RS, 99040-030</p>
                            <p>Telefone: (54)99950-8873</p>
                                           
                        </div>

                        
                </footer>

            </div>

        </section>
    )

}