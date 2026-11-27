import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento y redondea el total a dos decimales", () => {
    expect(calcularTotal([{ precio: 10.99, cantidad: 3, descuento: 0.2 }])).toBe(
      26.38,
    );
  });

  it("lanza un error si la cantidad es negativa", () => {
    expect(() => calcularTotal([{ precio: 10, cantidad: -1 }])).toThrow(
      new Error("Cantidad inválida"),
    );
  });
});
