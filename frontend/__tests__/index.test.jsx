// Jest docs https://github.com/testing-library/react-testing-library#basic-example
import '../__mocks__/mockJsdom'
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import HeaderBar from "../components/HeaderBar";
import { AuthProvider } from 'context/auth';
import "@testing-library/jest-dom";


describe("Home page", () => {
  it("renders title", () => {
    // Arrange
    render(
      <div>
        <Home />
      </div>
    );

    // Act
    const heading = screen.getByRole("heading", {
      name: /Discover Your Farmers Markets/i,
    });

    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("renders locations list", () => {
    // Arrange
    render(<Home />);

    // Act
    // const locationsSubHeading = screen.getByRole('heading', {
    //   name: /Locations/i,
    // })
    const scLocation = screen.getAllByText(/South Carolina/i)[0];
    const gaLocation = screen.getAllByText(/Georgia/i)[0];

    // Assert
    expect(scLocation).toBeInTheDocument();
  });

  it("renders market cards", () => {
    // Arrange
    render(<Home />);

    const portRoyalMarketLocation = screen.getAllByText(/Port Royal Farmers' Market/i)[0];
    const visitMoreInfoPage = screen.getAllByText(/More Information/i)[0];
    const visitOutsideSiteLink = screen.getAllByText(/Visit their site/i)[0];

    // Assert
    expect(portRoyalMarketLocation).toBeInTheDocument();
    expect(visitMoreInfoPage).toBeInTheDocument();
    expect(visitOutsideSiteLink).toBeInTheDocument();
  });
});

describe("Home page", () => {
  it("renders site title", () => {
    // Arrange
    render(
      <AuthProvider>
        <HeaderBar />
        <Home />
      </AuthProvider>
    );

    // Act
    const heading = screen.getByRole("heading", {
      name: /Farmers Market Finder/i,
    });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
