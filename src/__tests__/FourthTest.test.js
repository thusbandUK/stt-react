import { render, screen } from "@testing-library/react";
//import Profile from "./index";
import ResourceLink from "../Components/Resources/resourcesLink";

const mockData = 
    {
        id: 5,
        resourceTitle: "test title",
        imageLink: "/images/test-image.png",
        altText: "image would show alt text",
        hyperLink: "this-would-be-a-link",
        hyperLinkExternal: 'false',
        resourceDescription: "This would show description.",
        lastUpdated: "THIS WOULD SHOW DATE"
    }

jest.mock("../Components/Resources/resourcesLink",
  () => ({id,resourceTitle,imageLink,altText,hyperLink,hyperLinkExternal,resourceDescription,lastUpdated}) => `ResourceLink 
  resourceTitle:${resourceTitle}
  id:${id}
  imageLink:${imageLink}
  altText: ${altText}
  hyperLink: ${hyperLink}
  hyperLinkExternal: ${hyperLinkExternal}
  resourceDescription: ${resourceDescription}
  lastUpdated: ${lastUpdated}  
  `
)

/*
jest.mock("./PermissionsContainer", () => ({ profileId }) =>
  `This is PermissionsContainer profileId:${profileId}`
);
*/

describe("ResourceLink", () => {
  const renderResourceLink = () =>
    render(
      <ResourceLink
        key={mockData.id}
        altText={mockData.altText}
        resourceTitle={mockData.resourceTitle}
        imageLink={mockData.imageLink}      
        hyperLink={mockData.hyperLink}
        hyperLinkExternal={mockData.hyperLinkExternal}
        resourceDescription={mockData.resourceDescription}
        lastUpdated={mockData.lastUpdated}
      />
    );

  test("renders app", () => {
    renderResourceLink();
    // screen.debug is going to print the current DOM into the console
    screen.debug();
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/This would show description/i)).toBeInTheDocument();
    expect(screen.getByText(/THIS WOULD SHOW DATE/i)).toBeInTheDocument();
    
  });
});

/*
id: 5,
        resourceTitle: "test title",
        imageLink: "/images/test-image.png",
        altText: "image would show alt text",
        hyperLink: "this-would-be-a-link",
        hyperLinkExternal: 'false',
        resourceDescription: "This would show description.",
        lastUpdated: "THIS WOULD SHOW DATE" */