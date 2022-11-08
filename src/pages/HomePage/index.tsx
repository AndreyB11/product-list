import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useProduct } from "hooks/useProduct";

const HomePage = () => {
  const { products, useFetchProducts } = useProduct();

  useFetchProducts();

  return (
    <PageLayout header={<Header />}>
      <ProductsTable products={products} />
    </PageLayout>
  );
};

export default HomePage;
