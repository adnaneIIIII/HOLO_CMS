"use server";

import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";




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
