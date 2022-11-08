import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useProduct } from "hooks/useProduct";
import { useEffect } from "react";

const HomePage = () => {
  const { products, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <PageLayout header={<Header />}>
      <ProductsTable products={products} />
    </PageLayout>
  );
};

export default HomePage;
