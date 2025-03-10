import Image from "next/image"
import about1img from "../../../public/ABOUT1.png"
import about2img from "../../../public/ABOUT2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About(){
    return(
        <section className="bg-gradient-to-r from-[#FDF6EC] via-[#F0D9B5] to-[#dfd8d1] py-16">
            <div className="container px-4 mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="500">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={about1img}
                            alt="Foto PUG"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                            src={about2img}
                            alt="Foto GATO"
                            fill
                            quality={100}
                            priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="500">
                        <h2 className="text-4xl font-bold">SOBRE</h2>
                        <p>O Vida De Pets é um espaço dedicado ao bem-estar e à felicidade dos seus animais de estimação. Oferecemos uma ampla variedade de serviços para garantir que seu pet tenha o melhor atendimento, sempre com carinho e profissionalismo.</p>
                        
                        <ul className="space-y-4 font-bold">
                            <li className="flex items-center gap-2">
                                <Check className="text-cyan-400"/>
                                Banho e Tosa
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-cyan-400"/>
                                Hotel e Creche
                            </li>
                            <li className="flex items-center gap-2 ">
                                <Check className="text-cyan-400"/>
                                Atendimento veterinário, exames e vacinas
                            </li>
                            <li className="flex items-center gap-2 ">
                                <Check className="text-cyan-400"/>
                                Medicamentos e acessórios
                            </li>
                        </ul> 
                        <div className="flex gap-2">
                            <a target='_blank'
                                href={'https://wa.me/555499508873?text= Olá, vim pelo site e gostaria de mais informações...'}
                                className="bg-cyan-400 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato via WhatsApp
                            </a>
                            <a 
                            target="_blank"
                            href="https://maps.app.goo.gl/gfo3LgdqZYo5bzam8"
                            className= "flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da loja
                            </a>
                        </div>
                    
                    </div>
                </div>

                

            </div>
        </section>
    )
}