import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Product Title', () => {
  test('debe de mostrar el compoennete correctamente con el titlulo Personalizado', () => {
    const wrapper = render.create(
      <ProductTitle title="custome Product" className="title-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostrar el compoennete correctamente con el titlulo Personalizado', () => {
    const wrapper = render.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
