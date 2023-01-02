import BasketStat from "./components/basket-stat/basket-stat";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProductList from "./components/product-list/product-list";
import classes from "./styles/app.module.scss";
import data from "./data/data.json";
import { Item } from "./data";
import { useCallback, useMemo, useState } from "react";
import Basket from "./components/basket/basket";
import Modal from "./components/modal/modal";
import SuccessCont from "./components/success-cont/success-cont";

function App() {
  const [orderedProducts, setOrderedProducts] = useState<Item[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const totalPrice = useMemo(
    () => (orderedProducts.reduce((a, c) => a + c.price, 0) ?? 0).toFixed(2),
    [orderedProducts]
  );

  const onProductSelectHandler = useCallback(
    (item: Item) => {
      setOrderedProducts((o) => [...o, item]);
    },
    [setOrderedProducts]
  );

  const basketClickHandler = useCallback(() => {
    setIsBasketOpen(true);
  }, [setIsBasketOpen]);

  const orderNowHandler = useCallback(() => {
    if (Number(totalPrice)) {
      if (isBasketOpen) {
        setIsBasketOpen(false);
      }
      setIsSuccessModalOpen(true);
      setOrderedProducts([]);
    }
  }, [setIsSuccessModalOpen, isBasketOpen, totalPrice]);

  const successOkHandler = useCallback(() => {
    setIsSuccessModalOpen(false);
  }, [setIsSuccessModalOpen]);

  return (
    <div className={classes.app}>
      <Header />
      <Hero className={classes.hero} />
      <div className={classes["product-list-wrapper"]}>
        <ProductList
          onProductSelect={onProductSelectHandler}
          items={data.items}
        />
      </div>
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      >
        <SuccessCont onOkClick={successOkHandler} />
      </Modal>
      {isBasketOpen ? (
        <Modal
          className={classes["basket-modal"]}
          isOpen={isBasketOpen}
          onClose={() => setIsBasketOpen(false)}
        >
          <Basket
            className={classes["basket-list"]}
            totalPrice={totalPrice}
            items={orderedProducts}
          />
          <BasketStat
            className={classes["basket-stat"]}
            totalPrice={totalPrice}
            onBasketClick={basketClickHandler}
            onOrderNowClick={orderNowHandler}
          />
        </Modal>
      ) : (
        <BasketStat
          className={classes["basket-stat"]}
          totalPrice={totalPrice}
          onBasketClick={basketClickHandler}
          onOrderNowClick={orderNowHandler}
        />
      )}
    </div>
  );
}

export default App;
