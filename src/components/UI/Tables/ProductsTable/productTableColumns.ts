import { IGenericTableColumn } from "../GenericTable";

export const productTableColumns: IGenericTableColumn[] = [
  { key: "id", name: "ID", width: "10%" },
  { key: "name", name: "Name", width: "15%" },
  { key: "brand", name: "Brand", width: "15%" },
  { key: "price", name: "Price", width: "15%" },
  { key: "image", name: "Image", width: "15%" },
  { key: "actions", name: "", width: "10%" },
];
