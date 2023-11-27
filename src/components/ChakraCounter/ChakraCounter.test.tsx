import ChakraCounter from ".";
import { render, fireEvent } from "@testing-library/react";

describe(ChakraCounter, () => {
  it("counter should display correct initial count", () => {
    const { getByTestId } = render(<ChakraCounter initialCount={0} />);

    const countValue = getByTestId("count");

    expect(Number(countValue.textContent)).toEqual(0);
  });

  it("counter should increase by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <ChakraCounter initialCount={0} />
    );

    const countValue = getByTestId("count");
    expect(Number(countValue.textContent)).toEqual(0);

    const incrementButton = getByRole("button", { name: "Increment" });

    fireEvent.click(incrementButton);
    expect(Number(countValue.textContent)).toEqual(1);
  });

  it("counter should decrease by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <ChakraCounter initialCount={5} />
    );

    const countValue = getByTestId("count");
    expect(Number(countValue.textContent)).toEqual(5);

    const decrementButton = getByRole("button", { name: "Decrement" });

    fireEvent.click(decrementButton);
    expect(Number(countValue.textContent)).toEqual(4);
  });

  it("counter should go to 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <ChakraCounter initialCount={10} />
    );

    const countValue = getByTestId("count");
    expect(Number(countValue.textContent)).toEqual(10);

    const restartButton = getByRole("button", { name: "Restart" });

    fireEvent.click(restartButton);
    expect(Number(countValue.textContent)).toEqual(0);
  });
});

export {};
