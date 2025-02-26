"use client";
import { deleteProduct } from "@/app/actions/Productaction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function Delet({
  productid,
  name,
}: {
  productid: string;
  name: string;
}) {
  // const productd = await deleteProduct(productid);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form
            action={async () => {
              await deleteProduct(productid);
            }}>
            <input type="hidden" name="productId" readOnly />

            <div className="flex  items-center space-x-4 text-sm justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Separator orientation="vertical" />
              <Button
                variant="destructive"
                type="submit"
                onClick={() =>
                  toast(`${name} has been Removed`, {
                    description:
                      "You can add more Product by clicking on add product button",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }>
                Delete
              </Button>
              {/* <SubmiteBotton variant="destructive" text="Delete"  /> */}
            </div>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
