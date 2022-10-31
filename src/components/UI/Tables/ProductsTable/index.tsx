import { Avatar, IconButton, TableCell } from "@mui/material";
import { IProduct } from "shared/models";
import { GenericTable, IGenericTableColumn } from "../GenericTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";

interface IProps {
  products: IProduct[];
}

const columns: IGenericTableColumn[] = [
  { key: "id", name: "ID", width: "10%" },
  { key: "name", name: "Name", width: "15%" },
  { key: "brand", name: "Brand", width: "15%" },
  { key: "price", name: "Price", width: "15%" },
  { key: "image", name: "Image", width: "15%" },
  { key: "actions", name: "", width: "10%" },
];

export const ProductsTable = ({ products }: IProps) => {
  const { openModal } = useModal();

  return (
    <GenericTable
      columns={columns}
      data={products}
      keyExtractor={({ id }) => id}
      renderRow={(product) => (
        <>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.brand}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>
            <Avatar src={product.image} />
          </TableCell>
          <TableCell align="left">
            <IconButton
              onClick={() => {
                openModal("upsertModal", {
                  visible: true,
                  title: "Edit Product",
                  product,
                });
              }}
            >
              <EditIcon color="primary" />
            </IconButton>
            <IconButton
              onClick={() => {
                openModal("deleteModal", { visible: true, product });
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </TableCell>
        </>
      )}
    />
  );
};
