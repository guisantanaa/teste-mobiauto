import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDetails } from "../../../../services";
import ResultsType from "../../../../types";
import { CResults, ContainerFlex } from "../../styles";

const Results = () => {
  const router = useRouter();
  const query: any = router.query;

  const [details, setDetails] = useState<ResultsType | null>(null);

  useEffect(() => {
    async function handleDetails() {
      let data: ResultsType = await getDetails(query);
      setDetails(data);
    }
    handleDetails();
  });

  return (
    <ContainerFlex>
      <CResults>
        <h1>
          Tabela Fipe: Preço {details?.Marca} {details?.Modelo}{" "}
        </h1>
        <span>{details?.Valor}</span>
        <p>Este é o preço de compra do veiculo</p>
      </CResults>
    </ContainerFlex>
  );
};

export default Results;
