import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve 0 para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("calcula el total de un producto con descuento redondeado a 2 decimales", () => {
    const items = [
      { precio: 100, cantidad: 2, descuento: 0.15 },
    ];
    expect(calcularTotal(items)).toBe(170);
  });

  it("lanza un Error con 'Cantidad inválida' si alguna cantidad es negativa", () => {
    const items = [
      { precio: 100, cantidad: 1 },
      { precio: 50, cantidad: -2 },
    ];
    expect(() => calcularTotal(items)).toThrowError("Cantidad inválida");
  });
});
