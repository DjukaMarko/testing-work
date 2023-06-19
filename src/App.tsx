import { useEffect, useState } from "react";
import layer from "../public/layer.png";
import arrow from "../public/vector.png";
import arrow2 from "../public/vector2.png";
import star from "../public/star.png";
import product from "../public/product.png";
import product2 from "../public/product2.png";
import product3 from "../public/product3.png";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime("June, 24, 2023"), 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="bg-gradient-to-b from-[#0F0F0F00] to-[#EDE6D5] w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={layer} className="" />
          <p className="font-merriweather text-[38px] font-bold mt-6 text-[#333333]">
            Ne zamudi priložnosti
          </p>
          <p className="font-roboto text-[18px] w-[80ch] mt-2 text-[#7C7C7C] text-center">
            Kot že veš, ta akcija je časovno omejena in je na voljo samo
            enkrat letno, zato hitro skoči v trgovino in kupuj z ogromnimi
            popusti.
          </p>
          <div className="bg-[#D3E5FF] rounded-md px-4 mt-5 py-[0.5px]">
            <p className="font-roboto font-bold text-[#333333]">Akcija poteče čez:</p>
          </div>
          <div className="flex space-x-4 mt-12">
            <div className="bg-[#B48E2F] rounded-[15px] w-[91.91px] h-[78.12px] flex flex-col justify-center items-center text-white">
              <p className="font-[700] text-[32px]">{days}</p>
              <p className="text-[18px]">dni</p>
            </div>
            <div className="bg-[#B48E2F] rounded-[15px] w-[91.91px] h-[78.12px] flex flex-col justify-center items-center text-white">
              <p className="font-[700] text-[32px]">{hours}</p>
              <p className="text-[18px]">ur</p>
            </div>
            <div className="bg-[#B48E2F] rounded-[15px] w-[91.91px] h-[78.12px] flex flex-col justify-center items-center text-white">
              <p className="font-[700] text-[32px]">{minutes}</p>
              <p className="text-[18px]">minut</p>
            </div>
            <div className="bg-[#B48E2F] rounded-[15px] w-[91.91px] h-[78.12px] flex flex-col justify-center items-center text-white">
              <p className="font-[700] text-[32px]">{seconds}</p>
              <p className="text-[18px]">sekund</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start mt-16">
            <ul className="list-disc list-inside">
              <li className="font-opensans text-[#333333] marker:text-[#CE1C1C] mb-3">Trenutna razpoložljivost: <span className="text-[#CE1C1C] font-bold">Omejena zaloga</span></li>
              <li className="font-opensans text-[#333333] marker:text-[#CE1C1C]">Tveganje razprodaje zaloge: <span className="text-[#CE1C1C] font-bold">Veliko</span></li>
            </ul>
            <div className="cursor-pointer flex justify-between rounded-lg drop-shadow-lg w-[475px] bg-gradient-to-b mt-6 from-[#47BE8E] to-[#31946B] items-center p-8">
              <p className="text-white font-opensans font-bold text-[18px] ">Vstopi v spletno trgovino</p>
              <img src={arrow} />
            </div>
          </div>

        </div>
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center relative">
        <div className="absolute mx-auto top-[-60px] shadow-xl flex justify-center items-center w-[114px] h-[114px] bg-white rounded-full">
          <img src={arrow2} />
        </div>
        <p className="font-merriweather text-[38px] text-[#333333]">Preveri vse znižane izdelke</p>
        <p className="w-[80ch] text-center text-[#6B6B6B] text-[18px] mt-2">Kot že veš, je ta ponudba <span className="bg-[#D3E5FF] text-[#333333] font-bold">na voljo samo v času rojstno dnevne akcije</span>, zato ne zamudi tako velikih popustov, ki ti jih lahko ponudim samo tokrat.</p>
        <div className="flex space-x-6">
          <div className="bg-[#F5EEE1] p-7 rounded-lg mt-10">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex space-x-2">
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
              </div>
              <p className="font-merriweather text-[22px] mt-2">Golden Tree</p>
              <p className="font-merriweather font-bold text-[28px]">Ageless</p>
              <img src={product} />
              <div className="flex space-x-4 items-center">
                <p className="text-[28px] text-[#333333] font-bold font-merriweather">29,90 €</p>
                <p className="text-[14px] text-[#7E7E7E] mt-2">na izdelek</p>
              </div>
              <div className="flex space-x-4 items-center mt-2">
                <p className="text-[18px] text-[#333333] font-bold font-opensans">Skupaj: 174,40 €</p>
                <p className="text-[14px] text-[#7E7E7E] line-through">329,40 €</p>
              </div>
              <p className="text-[#7E7E7E] text-[14px] mt-4">155 € prihranka!</p>
              <button className="text-white rounded-lg font-bold w-full mt-2 p-4 bg-gradient-to-b from-[#47BE8E] to-[#31946B]">
                NAROČI ZDAJ!
              </button>
            </div>
          </div>

          <div className="bg-[#F5EEE1] p-7 rounded-lg mt-10">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex space-x-2">
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
              </div>
              <p className="font-merriweather text-[22px] mt-2">Golden Tree</p>
              <p className="font-merriweather font-bold text-[28px]">Collagen</p>
              <img src={product3} />
              <div className="flex space-x-4 items-center">
                <p className="text-[28px] text-[#333333] font-bold font-merriweather">39,90 €</p>
                <p className="text-[14px] text-[#7E7E7E] mt-2">na izdelek</p>
              </div>
              <div className="flex space-x-4 items-center mt-2">
                <p className="text-[18px] text-[#333333] font-bold font-opensans">Skupaj: 204,40 €</p>
                <p className="text-[14px] text-[#7E7E7E] line-through">329,40 €</p>
              </div>
              <p className="text-[#7E7E7E] text-[14px] mt-4">155 € prihranka!</p>
              <button className="text-white font-bold rounded-lg w-full mt-2 p-4 bg-gradient-to-b from-[#47BE8E] to-[#31946B]">
                NAROČI ZDAJ!
              </button>
            </div>
          </div>

          <div className="bg-[#F5EEE1] p-7 rounded-lg mt-10">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex space-x-2">
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
                <img src={star} className="w-[17px]" />
              </div>
              <p className="font-merriweather text-[22px] mt-2">Golden Tree</p>
              <p className="font-merriweather font-bold text-[28px]">Complete Biotics</p>
              <img src={product2} />
              <div className="flex space-x-4 items-center">
                <p className="text-[28px] text-[#333333] font-bold font-merriweather">26,90 €</p>
                <p className="text-[14px] text-[#7E7E7E] mt-2">na izdelek</p>
              </div>
              <div className="flex space-x-4 items-center mt-2">
                <p className="text-[18px] text-[#333333] font-bold font-opensans">Skupaj: 194,40 €</p>
                <p className="text-[14px] text-[#7E7E7E] line-through">329,40 €</p>
              </div>
              <p className="text-[#7E7E7E] text-[14px] mt-4">155 € prihranka!</p>
              <button className="text-white rounded-lg w-full mt-2 font-bold p-4 bg-gradient-to-b from-[#47BE8E] to-[#31946B]">
                NAROČI ZDAJ!
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
