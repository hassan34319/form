import React, { ChangeEvent } from "react";

interface ThirdScreenProps {
  inputs: {
    toepassing: string;
    vloerverwarming: string;
    story: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const ThirdScreen = ({inputs,handleInputChange} : ThirdScreenProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-8">
        <h3 className="text-black text-2xl font-extrabold text-center mb-2">
          Wat laatste vragen..
        </h3>
        <p className=" font-semibold text-black text-lg text-center">
          Vraag
          <span className="text-[#0090ff] font-medium"> vrijblijend </span>
          een offerte aan
        </p>
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Toepassing{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <select
                name="toepassing"
                value={inputs.toepassing}
                onChange={handleInputChange}
                className="text-[17px] shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              >
                <option value="selecteer" className="text-[15px]">
                  Selecteer toepassing
                </option>
                <option value="kantoor" className="text-[15px]">
                  Kantoor
                </option>
                <option value="bakkerij" className="text-[15px]">
                 Bakkerij
                </option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Vloerverwarming{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <select
              name="vloerverwarming"
              value={inputs.vloerverwarming}
              onChange={handleInputChange}
              className="shadow-md text-[17px] w-full border-[0.5px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              <option value="geen">Geen vloerwarming</option>
              <option value="ja" className="text-[15px]">
                Ja
              </option>
              <option value="nee" className="text-[15px]">
                Nee
              </option>
            </select>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Extra informatie{" "}
            </span>

            <textarea
              name="story"
              value={inputs.story}
              onChange={handleInputChange}
              rows={5}
              cols={33}
              className="resize-none shadow-md w-full border-[0.5px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-3 py-2 rounded-[6px]"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
