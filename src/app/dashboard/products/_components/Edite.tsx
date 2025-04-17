// "use client";
// import { ProductStatus } from "@prisma/client";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState, useActionState } from "react"; // ❌ Removed useActionState (was incorrect)
// import { productSchema } from "@/app/lib/ZodSchema";
// import { useForm } from "@conform-to/react";
// import { parseWithZod } from "@conform-to/zod";
// import Image from "next/image";
// import { XIcon } from "lucide-react";
// import { UploadDropzone } from "@/app/lib/uploadthing";
// import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { SubmiteBotton } from "@/components/submitebutton";

// interface IAppProps {
//   data: {
//     name: string;
//     id: string;
//     status: ProductStatus;
//     images: string[];
//     description: string;
//     shortdescription: string;
//     price: number;
//     compareAtPrice: number;
//     isFeatured: boolean;
//     createdAt: Date;
//   };
// }

// export default function Edite({ data }: IAppProps) {
//   const [images, setImages] = useState<string[]>([]);

//   const [lastResult, action] = useActionState(Edite, undefined);
//   const [from, fields] = useForm({
//     lastResult,
//     onValidate({ formData }) {
//       return parseWithZod(formData, { schema: productSchema });
//     },
//     shouldValidate: "onBlur",
//     shouldRevalidate: "onInput",
//   });
//   const handleDelete = (index: number) => {
//     setImages(images.filter((_, i) => i !== index));
//   };
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="default" className="bg-green-700 text-white">
//           Edit
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[725px]">
//         <DialogHeader>
//           <DialogTitle>Edit Product</DialogTitle>
//           <DialogDescription>Enter your Product details</DialogDescription>
//         </DialogHeader>
//         <form id={from.id} onSubmit={from.onSubmit} action={action}>
//           <div className="flex flex-col gap-6">
//             <div className="flex md:flex-col gap-3">
//               <Label>Product Name</Label>
//               <Input
//                 key={fields.name.key}
//                 name={fields.name.name}
//                 defaultValue={data.name} // ✅ Corrected
//                 type="text"
//                 className="w-full"
//                 placeholder="Product Name"
//               />
//               <p className="text-red-500">{fields.name.errors?.join(", ")}</p>{" "}
//               {/* ✅ Fixed errors */}
//             </div>
//             <div className="flex flex-col gap-3">
//               <Label>Description</Label>
//               <Textarea
//                 key={fields.description.key}
//                 name={fields.description.name}
//                 defaultValue={data.description} // ✅ Corrected
//                 placeholder="Product Description"
//               />
//               <p className="text-red-500">
//                 {fields.description.errors?.join(", ")}
//               </p>{" "}
//               {/* ✅ Fixed errors */}
//             </div>

//             <div className="flex flex-col gap-3">
//               <Label>Image</Label>
//               <input
//                 type="hidden"
//                 value={images.join(",")} // ✅ Ensure it's a string
//                 name={fields.images.name}
//                 defaultValue={fields.images.initialValue as any}
//               />
//               {images.length > 0 ? (
//                 <div className="flex gap-5">
//                   {images.map((image, index) => (
//                     <div key={index} className="relative w-[100px] h-[100px]">
//                       <Image
//                         height={100}
//                         width={100}
//                         src={image}
//                         alt="product image"
//                         className="w-full h-full object-cover rounded-lg border"
//                       />
//                       <button
//                         onClick={() => handleDelete(index)}
//                         type="button"
//                         className="absolute -top-1 -right-1 p-1 rounded-lg bg-red-500 text-white">
//                         <XIcon className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <UploadDropzone
//                   endpoint="imageUploader"
//                   onClientUploadComplete={(res) => {
//                     setImages(res.map((r) => r.url));
//                   }}
//                   onUploadError={() => {
//                     alert("Something went wrong");
//                   }}
//                 />
//               )}
//               <p className="text-red-500">{fields.images.errors?.join(", ")}</p>{" "}
//               {/* ✅ Fixed errors */}
//             </div>
//           </div>
//           <div className=" md:flex md:items-center gap-6 ">
//             <div className=" md:w-[40%]">
//               <Label>Price</Label>
//               <Input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 placeholder="Price"
//                 key={fields.price.key}
//                 name={fields.price.name}
//                 defaultValue={data.price}
//               />
//             </div>
//             <p className="text-red-500">{fields.price.errors}</p>

//             <div className=" md:w-[40%] ">
//               <Label>Compare-at price</Label>
//               <Input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 placeholder="Price"
//                 key={fields.compareAtPrice.key}
//                 name={fields.compareAtPrice.name}
//                 defaultValue={data.compareAtPrice}
//               />
//             </div>
//             <p className="text-red-500">{fields.compareAtPrice.errors}</p>
//           </div>

//           <div className="flex flex-col gap-3 pt-4">
//             <Label>Status</Label>
//             <Select
//               key={fields.status.key}
//               name={fields.status.name}
//               defaultValue={data.status}>
//               <SelectTrigger className="text-left py-2 pl-4">
//                 <SelectValue placeholder="Select Status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="draft">Draft</SelectItem>
//                 <SelectItem value="published">Published</SelectItem>
//                 <SelectItem value="archived">Archived</SelectItem>
//               </SelectContent>
//             </Select>
//             <p className="text-red-500">{fields.status.errors}</p>
//           </div>
//           <div className="flex flex-col gap-3">
//             <Label>Short Description</Label>
//             <Textarea
//               placeholder="Product Description"
//               key={fields.shortdescription.key}
//               name={fields.shortdescription.name}
//               defaultValue={data.shortdescription}
//             />
//             <p className="text-red-500">{fields.shortdescription.errors}</p>
//           </div>
//           <div className="flex flex-col gap-3 mt-4">
//             <Label>Featured Product</Label>
//             <Switch
//               key={fields.isFeatured.key}
//               name={fields.isFeatured.name}
//               defaultValue={fields.isFeatured.initialValue}
//             />
//             <p className="text-red-500">{fields.isFeatured.errors}</p>
//           </div>

//           <DialogFooter>
//             <SubmiteBotton text="Update Product" />
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
