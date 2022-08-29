import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

const { act } = render;

describe('Product Card', () => {
  test('debe de mostrar la Card Personalizado', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe incrementar el contador,', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>plus</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();

    console.log((tree as any).children[2].props);
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('0');

    expect(tree).toMatchSnapshot();
  });
});
