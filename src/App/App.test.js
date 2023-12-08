import { render, screen } from '@testing-library/react'
//import Landing from '../Components/Landing/landing';
import Hero from '../Components/Landing/hero';



test("Example 1 renders successfully", () => {
    render(<Hero />);

    const element = screen.getByText(/hi, i'm tom/i);

    expect(element).toBeInTheDocument();
})
