describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should not count duplicated products on cart", () => {
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should be able to search for a product and add it to the cart", () => {
    cy.searchByQuery("moletom");
    cy.get("a[href^='/product']").first().click();
    cy.wait(10000); // Espera de 10 segundos usando cy.wait
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });
});
