import * as yup from "yup";

export const productSchema = yup.object({
  name: yup
    .string()
    .required("Product name is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive"),

  description: yup
    .string()
    .required("Description is required")
    .min(25, "Description must be at least 25 characters"),

  image: yup
    .mixed<File | File[]>()
    .required("Product image is required"),
});

export type TProductInput = yup.InferType<typeof productSchema>;