import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type iAppProps = {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];

  };
};

function ProductCard({ item }: iAppProps) {
  return (
    <div className="rounded-lg">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[330px]">
                <Image
                  src={item}
                  alt="image product"
                  fill
                  className="object-cover object-center w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-inset ring-primary">
          ${item.price}
        </h3>
      </div>
      <p className="text-gray-400 text-sm mt-2 line-clamp-1">
        {item.description}
      </p>
      <Button className="w-full mt-5" asChild><Link href={`/product/${item.id}`}>Learn More!</Link></Button>
    </div>
  );
}

export default ProductCard;
