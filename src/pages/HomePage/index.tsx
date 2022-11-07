import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";

const HomePage = () => (
  <PageLayout header={<Header />}>
    <ProductsTable
      products={[
        {
          id: "1",
          name: "acd",
          brand: "Adidas",
          price: "123",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
      ]}
    />
  </PageLayout>
);

export default HomePage;
