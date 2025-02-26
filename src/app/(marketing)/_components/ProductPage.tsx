"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageSlider from "./imageSlider";
import formatCurrency from "./formatCurrency";
import Link from "next/link";

function ProductPage({ data }: { data: any }) {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Slider */}
        <ImageSlider images={data.images} />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-white">{data.name}</h1>
          <p className="mt-2 text-2xl text-primary">
            {formatCurrency(data.price)}
          </p>

          {/* Ratings */}
          <div className="mt-2 flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className="w-5 h-5 text-yellow-500 fill-yellow-500"
              />
            ))}
            <span className="text-sm text-gray-400 ml-2">(4.9)</span>
          </div>

          {/* Short Description */}
          <p className="mt-4 text-gray-400">{data.shortdescription}</p>

          {/* Buy Button */}
            <Link  className="w-full mt-6 bg-primary" href={`/checkout/${data.id}`} >
              <ShoppingBag className="w-5 h-5 mr-2" /> Buy Now
            </Link>

          {/* Payment Methods */}
          <div className="flex justify-center mt-6">
            <Image
              src="/payment.svg"
              alt="Payment Methods"
              width={350}
              height={60}
            />
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{data.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
