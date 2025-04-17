import { z } from "zod";

export const categoryschima = z.object({
  name: z.string(),
  description: z.string(),
  images: z.string(),
});

export const productSchema = z.object({
  Product_name: z.string(), // Made optional
  name: z.string(),
  description: z.string(),
  shortdescription: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().refine((val) => val % 1 !== 0, {
    message: "Price must be a floating-point number.",
  }),
  compareAtPrice: z.number().refine((val) => val % 1 !== 0, {
    message: "Price must be a floating-point number.",
  }),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean().optional(),
});

export const pageschema = z.object({
  title: z.string(),
  body: z.string(),
  status: z.string(),
  author: z.string(),
});

export const Purchase = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.enum([
    "United_States",
    "Canada",
    "United_Kingdom",
    "Australia",
    "Philippines",
    "Other",
  ]),
  productId: z.string().uuid("Invalid product ID"),
  ppname: z.string().min(1, "First name is required"),
  pprice: z.number(),


});
