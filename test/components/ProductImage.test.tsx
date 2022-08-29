import React from 'react';
import render from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Product Image', () => {
  test('debe de mostrar la url Personalizado', () => {
    const wrapper = render.create(
      <ProductImage
        img="https://avatars.githubusercontent.com/u/5388080?v=4"
        className="image-class"
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el compoenete correctamente con la imagen Personalizado', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
