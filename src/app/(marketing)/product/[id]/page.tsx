
import { prisma } from "@/app/lib/db";

import { notFound } from "next/navigation";
import ProductPage from "../../_components/ProductPage";

async function getData(productId: string) {
  const data = await prisma.products.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
      description: true,
      shortdescription: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

async function ProductIdRoute({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <>
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductPage data={data} />
      <div className="mt-16">
     {/* <FeaturedProducts />  */}
      </div>
    </div>
    
  </>
  );
}

export default ProductIdRoute;