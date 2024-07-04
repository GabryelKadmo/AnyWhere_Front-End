import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications';
import Header from "../../components/Header/Header";
import landingPagePpl from "./assets/img/landingPagePpl.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Casa1 from "./assets/img/casa1.jpg";
import Casa2 from "./assets/img/casa2.jpg";
import Casa3 from "./assets/img/casa3.jpg";
import Casa4 from "./assets/img/casa4.jpg";
import Casa5 from "./assets/img/casa5.jpg";
import Casa6 from "./assets/img/casa6.jpg";
import Casa7 from "./assets/img/casa7.jpg";
import Casa8 from "./assets/img/casa8.jpg";
import Casa9 from "./assets/img/casa9.jpeg";
import Casa10 from "./assets/img/casa10.jpg";
import Footer from '@/components/Footer/Footer';

export default function LandingPage() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleExploreClick = () => {
    console.log({
      location,
      startDate,
      guests
    });
  };
  const sendEmail = () => {
    if (!email.trim()) {
      setErrorMessage('Por favor, insira um endereço de email.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Por favor, insira um endereço de email válido.');
      return;
    }

    // Lógica para enviar o email aqui
    console.log("Email enviado:", email);
    setErrorMessage('');
    setEmail('');
  };



  const carrosselItems = [
    {
      imgSrc: Casa1,
      title: "Rio de Janeiro",
      rating: 4.7,
      discountPrice: "R$ 2.000,00/mês",
      normalPrice: "R$ 4.000,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa2,
      title: "São Paulo",
      rating: 4.5,
      discountPrice: "R$ 1.500,00/mês",
      normalPrice: "R$ 3.000,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa3,
      title: "Salvador",
      rating: 4.6,
      discountPrice: "R$ 1.200,00/mês",
      normalPrice: "R$ 2.400,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa4,
      title: "Fortaleza",
      rating: 4.8,
      discountPrice: "R$ 1.800,00/mês",
      normalPrice: "R$ 3.600,00/mês",
      country: "Brasil"
    }, {
      imgSrc: Casa5,
      title: "Porto Alegre",
      rating: 4.7,
      discountPrice: "R$ 1.600,00/mês",
      normalPrice: "R$ 3.200,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa6,
      title: "Belo Horizonte",
      rating: 4.9,
      discountPrice: "R$ 1.700,00/mês",
      normalPrice: "R$ 3.400,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa7,
      title: "Recife",
      rating: 4.8,
      discountPrice: "R$ 1.300,00/mês",
      normalPrice: "R$ 2.600,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa8,
      title: "Curitiba",
      rating: 4.6,
      discountPrice: "R$ 1.400,00/mês",
      normalPrice: "R$ 2.800,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa9,
      title: "Brasília",
      rating: 4.7,
      discountPrice: "R$ 1.900,00/mês",
      normalPrice: "R$ 3.800,00/mês",
      country: "Brasil"
    },
    {
      imgSrc: Casa10,
      title: "Florianópolis",
      rating: 4.9,
      discountPrice: "R$ 2.100,00/mês",
      normalPrice: "R$ 4.200,00/mês",
      country: "Brasil"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Header />
      <div className="LandingPageContainer">
        <div className="LandingPageStart flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 pr-4">
            <p className="p-4 md:p-16 md:pb-0 md:pr-0 pb-2 text-3xl md:text-5xl font-bold font-[volkhov]">
              Comece sua jornada emocionante conosco, em <span className="text-customAzul">Any</span><span className="text-customVermelho">where.</span>
            </p>
            <p className="p-4 md:pl-16 md:pr-0 text-lg md:text-xl text-[#666666] font-poppins">Descubra novas aventuras conosco, em qualquer lugar.</p>

            <div className="filterDiv grid grid-cols-1 md:grid-cols-4 items-center gap-4 rounded-xl bg-white shadow-2xl w-full mt-20 md: md:pt-4 md:pr-0 md:pl-4 md:mr-4 md:ml-16 h-auto md:h-28 px-4">
              <div className='col-span-1'>
                <select
                  className="w-full p-1 rounded border focus:outline-none"
                  value={location || ''}
                  onChange={(e) => setLocation(e.target.value || null)}
                >
                  <option value="" disabled>Escolha uma localização</option>
                  <option>BRASIL</option>
                  <option>Bahia</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Ceará</option>
                  <option>Acre</option>
                  <option>Alagoas</option>
                  <option>Amapá</option>
                  <option>Amazonas</option>
                  <option>Distrito Federal</option>
                  <option>Espírito Santo</option>
                  <option>Goiás</option>
                  <option>Maranhão</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                  <option>Minas Gerais</option>
                  <option>Pará</option>
                  <option>Paraíba</option>
                  <option>Paraná</option>
                  <option>Pernambuco</option>
                  <option>Piauí</option>
                  <option>Rio Grande do Norte</option>
                  <option>Rio Grande do Sul</option>
                  <option>Rondônia</option>
                  <option>Roraima</option>
                  <option>Santa Catarina</option>
                  <option>Sergipe</option>
                  <option>Tocantins</option>
                </select>
                <p className='text-[#666666] font-poppins pl-3 text-sm'>Onde você deseja ficar?</p>
              </div>

              <div className="col-span-1">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                  className="w-full p-1 text-base rounded border focus:outline-none focus:ring-2"
                />
                <p className='text-[#666666] font-poppins font-normal text-sm pl-2'>Quando deseja se hospedar</p>
              </div>
              <div className='col-span-1'>
                <select
                  className="w-full p-1 rounded border focus:outline-none"
                  value={guests || ''}
                  onChange={(e) => setGuests(e.target.value || null)}
                >
                  <option value="" disabled>Convidados</option>
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7-8</option>
                </select>
                <p className='text-[#666666] font-poppins text-sm pl-3'>Número de convidados</p>
              </div>
              <div className="col-span-1 flex justify-center md:justify-center">
                <button
                  className="p-2 w-full md:w-36 h-14 bg-customAzul text-white rounded-lg"
                  onClick={handleExploreClick}
                >
                  Explorar
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="84"
                height="84"
                className="text-customAzul animate-bounce"
              >
                <path
                  d="M12 19l-7-7 1.41-1.41L11 15.17V4h2v11.17l4.59-4.58L19 12l-7 7z"
                  fill="currentColor"
                />
              </svg>
            </div>

          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 md:mr-10 flex justify-center hidden md:block">
            <img src={landingPagePpl} alt="Imagem de pessoas na landing page" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="LandingPageMiddle text-center mt-44 mb-60">
          <div className='textOffers'>
            <p className='text-4xl font-bold font-[volkhov] mb-2'>Ofertas <span className='text-customAzul'>exclusivas & descontos</span></p>
            <p className=' font-poppins text-[#666666]'>Descubra nossos fantásticos descontos para reservas</p>
            <p className=' font-poppins text-[#666666]'>antecipadas e comece a planejar sua jornada.</p>
          </div>
          <div className='AccomodationsCarousel flex justify-center'>
            <div className="w-full max-w-6xl mb-4">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {carrosselItems.map((item, index) => (
                  <div key={index} className="p-4 mb-5">
                    <div className="bg-white p-4 rounded-lg shadow-md relative">
                      <div className="relative group">
                        <img src={item.imgSrc} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4 transition-opacity duration-300 group-hover:opacity-50 cursor-pointer" />
                        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-red-500 text-white text-sm font-bold p-2 rounded hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                            fazer reserva
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-2">⭐</span>
                        <span>{item.rating}</span>
                      </div>
                      <div className="text-lg font-semibold text-red-500 mb-1">{item.discountPrice}</div>
                      <div className="text-sm line-through text-gray-500">{item.normalPrice}</div>
                      <div className="mt-2 text-sm text-gray-700">{item.country}</div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-full max-h-96 relative p-4 sm:p-10">
          <div className="bg-customVermelho p-10 sm:p-20 rounded-xl text-center relative overflow-hidden">
            <p className="text-white mb-4 text-lg sm:text-3xl font-volkhov break-words">
              Inscreva-se e receba ofertas e descontos exclusivos
            </p>
            <div className="flex justify-center mt-10 sm:mt-20">
              <div className="relative w-full sm:w-2/3 z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRegEnvelope className="text-gray-500 opacity-40" style={{ zIndex: 100 }} />
                </div>
                <input
                  type="email"
                  placeholder="Insira seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 pl-10 w-full rounded-md pr-28 z-20 relative outline-none"
                  style={{ zIndex: 20 }}
                />
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-customAzul text-white py-2.5 px-3 mr-1 text-sm rounded-md z-20"
                  onClick={sendEmail}
                >
                  Inscrever-se
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full flex justify-start items-end z-0">
              <div className="relative">
                <div className="h-8 w-8 sm:h-16 sm:w-16 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute bottom-0 left-0 ml-2 sm:ml-4 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-6 w-6 sm:h-12 sm:w-12 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute bottom-0 left-0 ml-8 sm:ml-16 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-10 w-10 sm:h-20 sm:w-20 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute bottom-0 left-0 ml-14 sm:ml-28 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-7 w-7 sm:h-14 sm:w-14 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute bottom-0 left-0 ml-20 sm:ml-40 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-9 w-9 sm:h-18 sm:w-18 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute bottom-0 left-0 ml-26 sm:ml-52 transform rotate-90"></div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-full h-full flex justify-end items-start z-0">
              <div className="relative">
                <div className="h-8 w-8 sm:h-16 sm:w-16 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute top-0 right-0 mr-2 sm:mr-4 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-6 w-6 sm:h-12 sm:w-12 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute top-0 right-0 mr-8 sm:mr-16 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-10 w-10 sm:h-20 sm:w-20 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute top-0 right-0 mr-14 sm:mr-28 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-7 w-7 sm:h-14 sm:w-14 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute top-0 right-0 mr-20 sm:mr-40 transform rotate-45"></div>
              </div>
              <div className="relative">
                <div className="h-9 w-9 sm:h-18 sm:w-18 bg-gradient-to-br from-yellow-300 to-transparent rounded-full absolute top-0 right-0 mr-26 sm:mr-52 transform rotate-90"></div>
              </div>
            </div>
          </div>
        </div>

      </div >
      <Footer />
    </>
  );
}
