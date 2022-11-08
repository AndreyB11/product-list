export const formModel = {
  formFields: {
    name: {
      name: "name",
      label: "Name*",
      lengthError: "Should be at least 3 characters",
      requiredError: "Name is required",
    },
    brand: {
      name: "brand",
      label: "Brand*",
      matchError: "Should be 'Adidas' or 'Nike' or 'Puma'",
      requiredError: "Brand is required",
    },
    price: {
      name: "price",
      label: "Price*",
      numberError: "Should be a number",
      positiveError: "Should be a positive number",
      requiredError: "Price is required",
    },
  },
};
