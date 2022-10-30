import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "shared/store/reducers/productReducer";
import { selectProductState } from "shared/store/selectors";

const HomePage = () => {
  const { products } = useSelector(selectProductState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);

  return (
    <PageLayout header={<Header />}>
      <ProductsTable products={products} />
    </PageLayout>
  );
};

export default HomePage;
