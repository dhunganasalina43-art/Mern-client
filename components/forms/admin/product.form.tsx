'use client'

import AdminListCard from '@/components/admin/list-card'
import Button from '@/components/common/ui/button'
import ImageInput from '@/components/common/ui/image-input'
import Input from '@/components/common/ui/input'
import { productSchema, TProductInput } from '@/schema/product.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProductInput>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      image: undefined
    },
    resolver: yupResolver(productSchema)
  })

  const onSubmit = (data: TProductInput) => {
    console.log(data)
  }

  return (
    <AdminListCard>
      <div>
        <h4 className="text-[18px] font-semibold my-4">
          Product Form
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[500px] mx-auto flex flex-col gap-4"
        >
          <Input
            label="Product Name"
            name="name"
            id="name"
            type="text"
            placeholder="iPhone 15"
            register={register}
            error={errors?.name?.message}
            required
          />

          <Input
            label="Price"
            name="price"
            id="price"
            type="number"
            placeholder="1000"
            register={register}
            error={errors?.price?.message}
            required
          />

          <ImageInput
            label="Product Image"
            id="product_image"
            required
          />

          <Input
            label="Description"
            name="description"
            id="description"
            type="text"
            multiline
            placeholder="Enter product description..."
            register={register}
            error={errors?.description?.message}
            required
          />

          <Button
            label="Submit"
            type="submit"
          />
        </form>
      </div>
    </AdminListCard>
  )
}

export default ProductForm