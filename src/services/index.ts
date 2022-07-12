import DataType from "../types/index";
import ResultsType from "../types/index";

const BASE_URL = "https://parallelum.com.br/fipe/api/v1";

export const brandList = async () => {
  let res = await fetch(`${BASE_URL}/carros/marcas`);
  let brands: DataType[] = await res.json();
  return brands;
};

export const modelList = async (brand: String) => {
  let res = await fetch(`${BASE_URL}/carros/marcas/${brand}/modelos`);
  let { modelos, anos } = await res.json();

  let models: DataType[] = [];
  modelos.map((d: DataType, i: Number) => {
    models.push(d);
  });

  let years: DataType[] = [];
  anos.map((d: DataType, i: Number) => {
    years.push(d);
  });
  return { models: modelos, years: anos };
};

export const getDetails = async ({ brand, model, year }: ResultsType) => {
  let res = await fetch(
    `${BASE_URL}/carros/marcas/${brand}/modelos/${model}/anos/${year}`
  );
  let data = await res.json();
  return data;
};
