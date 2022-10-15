import { render, screen, fireEvent } from '@testing-library/react';
//import App from './App';
import ButtonComponent from "./Components/ButtonComponent";
import InputComponent from "./Components/InputComponent";
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

it("checkButtonRendered",()=>{
  const {queryByTitle} = render(<ButtonComponent/>);
  const btn = queryByTitle("myButton");
  expect(btn).toBeTruthy();
});

describe("whenButtonClicked",()=>{
  it("onClick",()=>{
    const {queryByTitle} = render(<ButtonComponent/>);
    const btn = queryByTitle("myButton");
    expect(btn.innerHTML).toBe("Click Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("It's Clicked");
  })
})

describe("typedInput",()=>{
  it("onChange",()=>{
    const {queryByTitle} = render(<InputComponent/>);
    const input = queryByTitle("myInput");
    fireEvent.change(input,{target:{value:'lets code'}});
    expect(input.value).toBe("lets code");
  })
})