import { Button } from '../../src/components/Button';

describe('Button Component', () => {
  it('renders with text', () => {
    cy.mount(<Button onClick={() => {}}>Click me</Button>);
    cy.get('[data-testid="test-button"]').should('have.text', 'Click me');
  });

  it('calls onClick when clicked', () => {
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.get('[data-testid="test-button"]').click();
    cy.wrap(onClick).should('have.been.called');
  });

  // Add more tests to make hot reload more likely to trigger
  it('has correct button element', () => {
    cy.mount(<Button onClick={() => {}}>Test</Button>);
    cy.get('[data-testid="test-button"]').should('be.visible');
  });
});