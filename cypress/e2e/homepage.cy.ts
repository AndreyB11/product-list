describe("homepage spec", () => {
  it("renders correctly", () => {
    cy.visit("/");

    cy.get("#root > div > div.MuiBox-root.css-1ren7kb > button").should(
      "exist"
    );

    cy.get(
      "#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.css-98ojrv-MuiContainer-root > div > table"
    ).should("exist");
  });
});
