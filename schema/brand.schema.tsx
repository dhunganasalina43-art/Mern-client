import * as yup from "yup";

export const brandSchema = yup.object({
  name: yup
    .string()
    .required("Brand name is required")
    .min(3, "Brand name must be at least 3 characters"),

  description: yup
    .string()
    .trim()
    .optional()
    .test(
      "desc-length",
      "Description must be at least 25 characters long",
      (value) => !value || value.length >= 25
    ),

  logo: yup
    .mixed<File | File[]>()
    .required("Logo is required"),
});

export type TBrandInput = yup.InferType<typeof brandSchema>;