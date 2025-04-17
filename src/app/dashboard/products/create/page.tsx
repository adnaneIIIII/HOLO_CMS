"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useActionState, useEffect, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { SubmiteBotton } from "../../_components/submitebutton";
import { createProduct } from "@/app/actions/Productaction";
import { productSchema } from "@/app/lib/ZodSchema";
import { UploadDropzone } from "@/app/lib/uploadthing";

export default function Create() {
  const [Content, setContent] = useState<String>("");
  useEffect(() => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const data = {
        id: uuidv4(),
        content: Content,
      };
      console.log(data);
    };
    handleSubmit({ preventDefault: () => {} });
  });


  const [images, setImages] = useState<string[]>([]);

  const [lastResult, action] = useActionState(createProduct, undefined);
  const [from, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    ///////////////////////////////////
    <div className="p-4">
      <div className="flex items-center gap-4 ">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/admin/products"}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semi-bold tracking-tighter">New Product</h1>
      </div>
      <form className="" id={from.id} onSubmit={from.onSubmit} action={action}>
        <div className="md:flex gap-4 justify-center">
          <div className="md:w-[60%]">
            <Card className="mt-5 mb-4">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Enter your Product details</CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 mb-4">
              <CardContent className="pt-4">
                <div className="flex flex-col gap-6">
                  <div className=" md:flex-col">
                    <Label>Product Name</Label>
                    <Input
                      key={fields.name.key}
                      name={fields.name.name}
                      defaultValue={fields.name.initialValue}
                      type="text"
                      className="w-full mt-3"
                      placeholder="Product Name"
                    />
                    <p className="text-red-500">{fields.name.errors}</p>
                  </div>
                  <div className=" flex-col gap-3 ">
                    <Label>Description</Label>
                    <Textarea
                      //  value={Content.toString()} // Controlled input
                      //  onChange={(e) => {
                      //    const newContent = e.target.value; // Get the input's value
                      //    setContent(newContent); // Update local state
                      //    fields.description.value = newContent; // Sync with the form's field
                      //  }}
                      key={fields.description.key}
                      name={fields.description.name}
                      placeholder="Product Description"
                      className=""
                    />
                    <p className="text-red-500">{fields.description.errors}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Description</Label>

                    {/* <div className="">
                <Tiptap
                  content={Content}
                  onChange={(newContent: string) =>
                    handleContentChange(newContent)
                  }
                />
              </div> */}

                    <p className="text-red-500">{fields.description.errors}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Image</Label>
                    <input
                      type="hidden"
                      value={images}
                      key={fields.images.key}
                      name={fields.images.name}
                      defaultValue={fields.images.initialValue as any}
                    />
                    {images.length > 0 ? (
                      <div className="flex gap-5">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[100px] h-[100px]">
                            <Image
                              height={100}
                              width={100}
                              src={image}
                              alt={"product image"}
                              className="w-full h-full object-cover rounded-lg border"
                            />
                            <button
                              onClick={() => handleDelete(index)}
                              type="button"
                              className="absolute -top-1 -right-1 p-1 rounded-lg bg-red-500 text-white">
                              <XIcon className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="imageUploader"
                        className=""
                        onClientUploadComplete={(res) => {
                          setImages(res.map((r) => r.url));
                        }}
                        onUploadError={(error: Error) => {
                          alert("Something went wrong");
                        }}
                      />
                    )}
                    <p className="text-red-500">{fields.images.errors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-4 ">
                <CardTitle className="pt-2 pb-4">Pricing</CardTitle>

                <div className=" md:flex md:items-center gap-6 ">
                  <div className=" md:w-[40%]">
                    <Label>Price</Label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="Price"
                      key={fields.price.key}
                      name={fields.price.name}
                      defaultValue={fields.price.initialValue}
                    />
                  </div>
                  <p className="text-red-500">{fields.price.errors}</p>

                  <div className=" md:w-[40%] ">
                    <Label>Compare-at price</Label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="Price"
                      key={fields.compareAtPrice.key}
                      name={fields.compareAtPrice.name}
                      defaultValue={fields.compareAtPrice.initialValue}
                    />
                  </div>
                  <p className="text-red-500">{fields.compareAtPrice.errors}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end"></CardFooter>
            </Card>
          </div>
          <div className="mt-5 md:w-[25%]">
            <Card className="mb-2">
              <CardContent className="pt-4">
                <div className="flex flex-col gap-3">
                  <Label>Status</Label>
                  <Select
                    key={fields.status.key}
                    name={fields.status.name}
                    defaultValue={fields.status.initialValue}>
                    <SelectTrigger className="text-left py-2 pl-4">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-red-500">{fields.status.errors}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Label>Short Description</Label>
                  <Textarea
                    placeholder="Product Description"
                    key={fields.shortdescription.key}
                    name={fields.shortdescription.name}
                    defaultValue={fields.shortdescription.initialValue}
                  />
                  <p className="text-red-500">
                    {fields.shortdescription.errors}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <Label>Featured Product</Label>
                  <Switch
                    key={fields.isFeatured.key}
                    name={fields.isFeatured.name}
                    defaultValue={fields.isFeatured.initialValue}
                  />
                  <p className="text-red-500">{fields.isFeatured.errors}</p>
                </div>
                <div className="flex justify-start gap-3 mt-4">
                  <SubmiteBotton text="Create Product" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
