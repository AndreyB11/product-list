import { Avatar, IconButton, TableCell, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IProduct } from 'shared/models';
import { useModal } from 'components/UI/Modals/GenericModal/GenericModalProvider';
import { GenericTable } from '../GenericTable';
import { productTableColumns } from './productTableColumns';
import { useCallback } from 'react';

interface IProps {
  products: IProduct[];
}

export const ProductsTable = ({ products }: IProps) => {
  const { openModal } = useModal();

  const handleDeleteClick = useCallback(
    (product: IProduct) => {
      openModal('deleteModal', { product });
    },
    [openModal]
  );

  const handleEditClick = useCallback(
    (product: IProduct) => {
      openModal('upsertModal', {
        title: 'Edit Product',
        product,
      });
    },
    [openModal]
  );

  return (
    <GenericTable
      columns={productTableColumns}
      data={products}
      keyExtractor={({ id }) => id}
      renderRow={(product) => (
        <>
          <TableCell>
            <Typography sx={{ textDecoration: 'underline' }}>
              {product.id}
            </Typography>
          </TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>
            <Typography color="coral">{product.brand}</Typography>
          </TableCell>
          <TableCell>
            <Typography color="blue">{product.price}$</Typography>
          </TableCell>
          <TableCell>
            <Avatar src={product.image} />
          </TableCell>
          <TableCell align="left">
            <IconButton
              onClick={() => handleEditClick(product)}
              data-testid="edit-product-button"
            >
              <EditIcon color="primary" />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteClick(product)}
              data-testid="delete-product-button"
            >
              <DeleteIcon color="error" />
            </IconButton>
          </TableCell>
        </>
      )}
    />
  );
};
