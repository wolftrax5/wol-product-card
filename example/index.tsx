import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee mug',
  // img: "./coffee-mug.png",
};

const App = () => {
  return (
    <>
      <ProductCard
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
