import React from "react";


interface FirstScreenProps {
  inputs: Inputs
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FirstScreen = ({inputs, handleInputChange} : FirstScreenProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mb-5">
        <h3 className="text-black text-2xl font-extrabold text-center">
          Betonvloer offerteop maat?
        </h3>
        <p className="text-[#0090ff] font-medium text-lg text-center">
          Als eerst een paar basis gegevens
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-between">
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff]"
                value="particulier"
                checked={inputs.useCase === "particulier"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 1.png" />
                Particulier
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff]"
                value="zakelijk"
                checked={inputs.useCase === "zakelijk"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 2.png" />
                Zakelijk
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff]"
                value="industrieel"
                checked={inputs.useCase === "industrieel"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 3.png" />
                Industrieel
              </span>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-0">
          <div className="flex-1">
            <label className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Naam
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                placeholder="Nana"
                name="naam"
                value={inputs.naam}
                onChange={handleInputChange}
                className="shadow-md w-full border-2 outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              />
            </label>
          </div>
          <div className="flex-1">
            <div className="flex items-center pt-5 h-full w-full justify-around">
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-sky-600"
                    value="dhr"
                    checked={inputs.gender === "dhr"}
                    onChange={handleInputChange}
                  />
                  Dhr.
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-sky-600"
                    value="mvr"
                    checked={inputs.gender === "mvr"}
                    onChange={handleInputChange}
                  />
                  Mvr.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Email{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="email"
              placeholder="Uw email adres"
              className="shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Mobiel{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="Uw mobiel nummer"
              className="shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              name="mobiel"
              value={inputs.mobiel}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Postcode{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                placeholder="Postcode"
                className="shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
                name="postcode"
                value={inputs.postcode}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Hlasnummer{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                placeholder="Halsnummer"
                className="shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
                name="hlasnummer"
                value={inputs.hlasnummer}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
