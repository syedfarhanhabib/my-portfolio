"use client";
import { Tabs } from "./Tabs";
import TabCard from "./TabCard";

export function TabsSection() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (<TabCard customClass="" content="/riyadh.jpg" text="" />),
    },
    {
      title: "Services",
      value: "services",
      content: (<TabCard customClass="" content="/kelvin.jpg" text="" />),
    },
    {
      title: "Playground",
      value: "playground",
      content: (<TabCard customClass="" content="/euroauto.jpg" text="" />),
    },
    {
      title: "Content",
      value: "content",
      content: (<TabCard customClass="" content="/puntopago.jpg" text="" />),
    }
  ];
  return (
    <div className=" relative h-[500px] z-10 [perspective:1000px]  flex flex-col mx-auto w-full  items-start justify-start mb-0">
      <Tabs tabs={tabs} />
    </div>
  );
}