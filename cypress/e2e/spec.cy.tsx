import Home from "@/app/page";

beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("넥스트js 기본페이지 테스트", () => {
  it("페이지에서 글찾기", () => {
    cy.contains("Get started by editing").should("be.visible");
  });

  it("Docs로 이동", async () => {
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.contains("Docs").click();
    cy.get("@open").url().should("include", "docs?");
  });
});
