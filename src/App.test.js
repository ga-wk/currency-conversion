import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import fetchMock from "fetch-mock";
import { Convert } from "./components/convert";
import { Header } from "./components/header";
// import { listCurrency } from "./components/public";
import { fetchCurrency } from "./redux/currency/actions";
import store from "./redux/store";
import testData from "./testData";
import { Footer } from "./components/footer";

test("buttons menu", () => {
  render(<Header />);

  expect(screen.getByTestId("btn-nav")).toBeInTheDocument();
  expect(screen.getByTestId("btn-sub")).toBeInTheDocument();

  expect(screen.getByTestId("nav")).toBeInTheDocument();
  expect(screen.getByTestId("svg-sub")).toBeInTheDocument();
});

test('nav event', () => {
  const handleClick = jest.fn()
  render(<Header />)
  fireEvent.click(screen.getByText(/Меню навигации/i))
  expect(handleClick).toHaveBeenCalledTimes(0)
})

test('sub menu event', () => {
  const handleClick = jest.fn()
  render(<Header />)
  fireEvent.click(screen.getByText(/Настройки/i))
  expect(handleClick).toHaveBeenCalledTimes(0)
})

test("nav links", () => {
  render(<Header />);

  const linkToConverter = screen.getByText(/Конвертер валюты/i);
  expect(linkToConverter).toBeInTheDocument();

  const linkToCurrency = screen.getByText(/Курсы валют/i);
  expect(linkToCurrency).toBeInTheDocument();
});

test("sub menu", () => {
  render(<Header />);

  const linkToConverter = screen.getByLabelText(/Валюта по умолчанию:/i);
  expect(linkToConverter).toBeInTheDocument();

  const select = screen.getByTestId("selector");
  expect(select).toBeInTheDocument();
});

describe("fetch currency", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_CURRENCY_SUCCEEDED when fetching currency has been done", () => {
    const testdata = testData.Valute;
    let testKeys = [];
    for (const key in testdata) {
      testKeys.push(key);
    }
    return store.dispatch(fetchCurrency()).then(() => {
      const valute = store.getState().currency.currency.Valute;
      let valuteKeys = [];
      for (const key in valute) {
        valuteKeys.push(key);
      }
      expect(testKeys).toEqual(valuteKeys);
    });
  });
});

test("Converter", () => {
  render(<Convert />);

  let text = screen.getByText(/равно/i);
  expect(text).toBeInTheDocument();
  text = screen.getByText(/UTC/i);
  expect(text).toBeInTheDocument();
  text = screen.getByText(/Отказ от обязательств/i);
  expect(text).toBeInTheDocument();
});
 

test("Footer", () => {
  render(<Footer />);

  let text = screen.getByText(/© Made with love by Andrey Gazzaev/i);
  expect(text).toBeInTheDocument();
});
