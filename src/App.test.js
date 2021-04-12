import { render, screen } from "@testing-library/react";
import { Header } from "./components/header";

test("buttons menu", () => {
  render(<Header />);

  expect(screen.getByTestId("btn-nav")).toBeInTheDocument();
  expect(screen.getByTestId("btn-sub")).toBeInTheDocument();

  expect(screen.getByTestId("svg-nav")).toBeInTheDocument();
  expect(screen.getByTestId("svg-sub")).toBeInTheDocument();
});

test("nav links", () => {
  render(<Header />);

  const linkToConverter = screen.getByText(/Конвертер валюты/i);
  expect(linkToConverter).toBeInTheDocument();

  const linkToCurrency = screen.getByText(/Курсы валют/i);
  expect(linkToCurrency).toBeInTheDocument();
});


test('sub menu', () => {
  render(<Header />);

  const linkToConverter = screen.getByLabelText(/Валюта по умолчанию:/i);
  expect(linkToConverter).toBeInTheDocument();

  const select = screen.getByTestId("selector")
  expect(select).toBeInTheDocument();
});

