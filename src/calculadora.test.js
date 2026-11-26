import { sumar, restar, multiplicar, dividir } from "./calculadora.js";

describe("Calculadora - sumar", () => {
  it("deberia sumar dos numeros positivos", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia sumar un numero negativo", () => {
    expect(sumar(-1, 4)).toEqual(3);
  });

  it("deberia sumar dos negativos", () => {
    expect(sumar(-3, -2)).toEqual(-5);
  });
});

describe("Calculadora - restar", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(10, 4)).toEqual(6);
  });

  it("deberia dar negativo si el segundo es mayor", () => {
    expect(restar(2, 5)).toEqual(-3);
  });
});

describe("Calculadora - multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 4)).toEqual(12);
  });

  it("deberia dar cero si uno de los factores es cero", () => {
    expect(multiplicar(0, 99)).toEqual(0);
  });

  it("deberia dar negativo si un factor es negativo", () => {
    expect(multiplicar(-2, 5)).toEqual(-10);
  });
});

describe("Calculadora - dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(10, 2)).toEqual(5);
  });

  it("deberia devolver un decimal", () => {
    expect(dividir(7, 2)).toBeCloseTo(3.5);
  });

  it("deberia lanzar error al dividir entre cero", () => {
    expect(() => dividir(5, 0)).toThrow("No se puede dividir entre cero");
  });
});
