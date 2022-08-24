# Wol-product-card

Es un paquete de pruebas de deploy en NPM

## Example

```js
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} "from wol-product-card";
```

```js
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 2,
    maxCount: 12,
  }}
>
  {({ reset, isMaxCounterReached, maxCount, count, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle title={'Custom Mug'} />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
