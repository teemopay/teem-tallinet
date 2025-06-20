"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function About() {
  const Industria = [
    "Finanzas",
    "Educación",
    "Dispositivos Inteligentes",
    "Publicidad",
    "Retail",
    "Big Data",
    "AI",
    "Salud",
    "Otros",
  ];
  const numbers = ["0-100", "100-200", "200-500", "500-1000", "Más de 1000"];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const hasEmptyValue = Object.values(data).some((v) => !v);
    if (hasEmptyValue) {
      return alert("Check required fields!");
    }
    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: data }),
      });
    }
  };
  return (
    <div className="flex justify-center items-center w-full max-h-[1120px] bg-[url('/img/about.png')] bg-cover bg-center bg-no-repeat pt-[206px] pb-[100px] px-[40px]">
      <div className="about  p-[40px] px-[12px] md:px-[110px] md:py-[62px] bg-[#fff]">
        <div className="text-[20px]  md:text-[58px]  font-bold  md:leading-[67px] mb-[10px] text-center">
          Contáctenos
        </div>
        <div className="text-[16px]   text-center mb-[36px]">
          Deje su información para que nuestro gerente de clientes pueda ponerse
          en contacto <br></br> con usted lo antes posible.
        </div>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-[18px]">
            <Label htmlFor="fullName">Su Nombre*</Label>
            <Input
              name="fullName"
              id="fullName"
              placeholder="Por favor ingrese"
              type="text"
            />
          </div>
          <div className="mb-[18px]">
            <Label htmlFor="phone">Número de Teléfono*</Label>
            <Input
              id="phone"
              placeholder="Número de Teléfono"
              type="text"
              name="phone"
            />
          </div>
          <div className="mb-[18px]">
            <Label htmlFor="work">Su Cargo*</Label>
            <Input id="work" placeholder="Su Cargo*" type="text" name="work" />
          </div>
          <div className="mb-[18px]">
            <Label htmlFor="type">Industria*</Label>
            <Select name="type">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industria" />
              </SelectTrigger>
              <SelectContent>
                {Industria.map((i, index) => {
                  return (
                    <SelectItem value={i} key={index}>
                      {i}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-[47px]">
            <Label htmlFor="type">Número de Empleados*</Label>
            <Select name="numbers">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Número de Empleados" />
              </SelectTrigger>
              <SelectContent>
                {numbers.map((i, index) => {
                  return (
                    <SelectItem value={i} key={index}>
                      {i}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="group/btn bg-[#0077FF] relative block h-10 w-full max-w-[227px] rounded-full  font-medium text-white cursor-pointer"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
