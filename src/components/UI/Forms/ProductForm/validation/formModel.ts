export const formModel = {
  formFields: {
    name: {
      name: "name",
      label: "Name*",
      lengthError: "Should be at least 3 characters",
      requiredErrorMsg: "Name is required",
    },
    brand: {
      name: "brand",
      label: "Brand*",
      lengthError: "Brand be at least 3 characters",
      requiredErrorMsg: "Brand is required",
    },
    price: {
      name: "price",
      label: "Price*",
      numberError: "Should be at least 1",
      requiredErrorMsg: "Price is required",
    },
  },
};
