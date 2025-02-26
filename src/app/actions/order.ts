"use server"
import { parseWithZod } from "@conform-to/zod";
import { Purchase } from "../lib/ZodSchema";
import { prisma } from "../lib/db";
import { redirect } from "next/navigation";

export async function createorder(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: Purchase,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await prisma.purchase.create({
      data: {
        firstname: submission.value.firstname,
        lastname: submission.value.lastname,
        email: submission.value.email,
        phone: submission.value.phone,
        country: submission.value.country,
        productId: submission.value.productId, // Add the product relation
      },
    });
  } catch (error) {
    console.log("error", error);
  }

  redirect("/admin/products");
}
