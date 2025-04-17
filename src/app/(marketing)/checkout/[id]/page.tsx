import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import CheckoutForm from "../../_components/Checkoutform";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const prisma = new PrismaClient();

export async function checkoutgetData(productId: string) {
  try {
    const data = await prisma.products.findUnique({
      where: {
        id: productId,
      },
      select: {
        price: true,
        description: true,
        name: true,
        compareAtPrice: true,
        shortdescription: true,
      },
    });

    if (!data) {
      return notFound(); // Ensure `notFound` is imported from "next/navigation"
    }

    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null; // Handle errors gracefully
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const data = await checkoutgetData(params.id);
  return (
    <div className="container mx-auto py-10 px-6 md:px-12">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

      <div className="flex justify-between ">
        <div className="w-[60%]"><CheckoutForm params={params.id} /></div>
        <Card className="bg-gray-800 text-white self-start w-[35%]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Order Summary</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-lg font-medium">{data?.name}</h3>
            <div className="flex justify-between items-center">
              <p>Price: ${data?.price}</p>
              {data?.compareAtPrice && (
                <p className="text-gray-400 line-through">Was: ${data.compareAtPrice}</p>
              )}
            </div>
            <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${data?.price}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
