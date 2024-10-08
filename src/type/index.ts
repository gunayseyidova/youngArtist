import { ReactNode } from "react";

export interface Product {
   id: number;
   name: string;
   price: number;
   imageSrc: string;
   author: string;
   imageAlt: string;
   authorSlug: string;
   size: string;
   authorImg: string;
}

export interface FormGroupProps {
   children: ReactNode;
   className?: string;
}
