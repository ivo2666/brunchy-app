
import BasketStat from './components/basket-stat/basket-stat';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import ProductList from './components/product-list/product-list';
import classes from './styles/app.module.scss';
import data from './data/data.json';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Hero className={classes.hero} />
      <div className={classes["product-list-wrapper"]}><ProductList items={data.items} /></div>
      <BasketStat className={classes["basket-stat"]} totalPrice={20} />
    </div>
  );
}

export default App;
