import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
//import { LocationDisplay} from '..App/App'
import { LocationDisplay } from '../App/App'
import App from '../App/App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
//import Resources from '../Components/Resources/resourcesLink'
import Resources from '../Components/Resources/resources'
import { resourceLinkData } from '../Components/Resources/resourceLinkData'

const mockData = [
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
]

test("Example 2 renders successfully", () => {
    render(<Resources resourceLinkData={resourceLinkData}/>, {wrapper: BrowserRouter});

    const element = screen.getByText(/Resources/i);

    expect(element).toBeInTheDocument();
})
/*
test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
   // const user = userEvent.default.setup()
  
    // verify page content for default route
    expect(screen.getByText(/you are home/i)).toBeInTheDocument()
  
    // verify page content for expected route after navigating
    //await user.click(screen.getByText(/about/i))
    //expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })

*/



