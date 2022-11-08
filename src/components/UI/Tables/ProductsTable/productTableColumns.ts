import { IGenericTableColumn } from "../GenericTable";

export const productTableColumns: IGenericTableColumn[] = [
  { id: "id", name: "ID", width: "10%" },
  { id: "name", name: "Name", width: "15%" },
  { id: "brand", name: "Brand", width: "15%" },
  { id: "price", name: "Price", width: "15%" },
  { id: "image", name: "Image", width: "15%" },
  { id: "actions", name: "", width: "10%" },
];
