import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().refine((val) => val % 1 !== 0, {
    message: "Price must be a floating-point number.",
  }),
  Product_name: z.string(),
  lastname: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.enum([
    "United_States",
    "Canada",
    "United Kingdom",
    "Australlia",
    "Philipine",
    "Others",
  ]),
  device: z.enum([
    "Android_Box",
    "Fire_Stick",
    "Apple_devices",
    "LG_TV",
    "PC_Windows",
    "Other",
  ]),
  Images: z.string(),
  createdat: z.date(),
});

export const pro_page = z.object({
  Product_name: z.string(),
  price: z.number().refine((val) => val % 1 !== 0, {
    message: "Price must be a floating-point number.",
  }),
  description: z.string(),
  images: z.array(z.string()).min(1, "At least one image is required"),
});
