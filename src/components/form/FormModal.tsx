"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FirstScreen from "@/components/form/FirstScreen";
import SecondScreen from "@/components/form/SecondScreen";
import ThirdScreen from "@/components/form/ThirdScreen";
import FourthScreen from "@/components/form/FourthScreen";

import { ArrowLeft, X } from "lucide-react";

// Change this to 'import { useSearchParams } from "react-router-dom" if working in react'
import { useSearchParams } from "next/navigation";
import { set } from "react-hook-form";
import OpenButton from "./OpenButton";
import { client } from "@/app/utils/client";
type FormProps = {};

const FormModal = ({}: FormProps) => {

  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [cid, setCid] = useState("");
  const [inputs, setInputs] = useState({
    useCase: '',
    naam: '',
    gender: '',
    email: '',
    mobiel: '',
    postcode: '',
    hlasnummer: '',
    buildingType: '',
    gewenste: 'manden',
    oppervlakte: '',
    type: '',
    toepassing: '',
    vloerverwarming: 'geen',
    story: '',
  });

  

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    let newOpen = false;
    const widget = searchParams.get("widget");
    const cidParams = searchParams.get("cid");
    setCid(cidParams || "");
    if (widget && widget === "open") {
      newOpen = true;
    }
    setOpen(newOpen);
  }, [searchParams]);

  if (!open)
    return (
      // This button is responsible for opening form, please change it accordig to your need
      <OpenButton setOpen={setOpen} />
    );

  const { step, goToStep, isFirstStep, isLastStep, back, next, isThirdStep } =
    useMultiStepForm(
      [
        <FirstScreen
          inputs={inputs}
          handleInputChange={handleInputChange}
        />,
        <SecondScreen          inputs={inputs}
        handleInputChange={handleInputChange} />,
        <ThirdScreen  inputs={inputs}
        handleInputChange={handleInputChange} />,
        <FourthScreen />,
      ],
      currentStepIndex,
      setCurrentStepIndex
    );

    const handleFormSubmit = async () => {
  
      try {
        // Adding the cid field to the form data
        const formData = {
          ...inputs,
          cid: cid, // Replace 'your_cid_here' with your actual cid
        };
  
        // Create a new document in the 'form' collection
        const response = await client.create({
          _type: 'form', // 'form' should match the name of your Sanity schema
          ...formData, // Spread all form data into the document
        });
  
        console.log('Form data posted to Sanity:', response);
        // Handle success if needed
  
      } catch (error) {
        console.error('Error posting form data to Sanity:', error);
        // Handle error if needed
      }
    };

    const storeContacts = async () => {
      const { naam, email, mobiel,postcode, gender,hlasnummer } = inputs; // Assuming inputs is the state containing these values
    
      const requestData = {
        name : naam,
        email : email,
        mobile : mobiel,
        postcode : postcode,
        gender : gender,
        homeNumber : hlasnummer
      };
    
      try {
        const response = await fetch('/api/createContact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
    
        if (!response.ok) {
          throw new Error('Failed to store contacts');
        }
    
        // Handle success response
        const data = await response.json();
        console.log('Contact stored successfully:', data);
      } catch (error) {
        console.error('Error storing contacts:');
        // Handle error
      }
    };
    

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLastStep) {
      goToStep(0);
    }
    next();

    if(isFirstStep) {
      await storeContacts();
    }

    if(isThirdStep) {
      await handleFormSubmit();
    }
  };

  return (
    <div className="w-[95%] md:w-[80%] max-w-[500px] lg:h-[70vh] lg:max-h-[800px] h-[800px] lg:min-h-[680px] my-5 rounded-xl shadow-lg bg-[#fdfdff]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between h-full w-full relative p-8 bg-[#fdfdff]"
      >
        {!isFirstStep && !isLastStep && (
          <button
            type="button"
            className="absolute -top-[14px] -left-3 h-[4.25rem] w-[4.25rem] rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
            onClick={back}
          >
            <ArrowLeft size={37} strokeWidth={2.6} color="#A8A7A9" />
          </button>
        )}
        <button
          type="button"
          className="absolute top-0 right-0 h-10 w-10 rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
          onClick={back}
        >
          <X
            size={30}
            strokeWidth={2.6}
            color="#65c759"
            onClick={() => setOpen(false)}
          />
        </button>
        {step}
        <div className="w-full flex gap-5">
          <button
            className={`${
              isLastStep ? "bg-[#65c759]" : "bg-[#0090ff]"
            } text-white w-full py-3 md:py-4 text-lg rounded-[4px]`}
          >
            {isLastStep ? "Aanvraag gelukt" : "Offerte aanvragen"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
