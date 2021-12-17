import { useEffect } from "react";
import CardBook from "../../components/cardBook";
import CardSsection from "../../components/cardection";

export default function Book(props) {


  // useEffect(() => {

  //   const id = props.params.id
  //   if (id) {
  //     const avaliacao = AvaliacoesService.get(id);
  //     for (let campo in avaliacao) {
  //       setValue(campo, avaliacao[campo]);
  //     }
  //   }

  // }, [props, setValeu])

  return (
    <>
      <CardSsection>
        <button>
          <CardBook title={book.name} cod={book.codigo} price={book.price} />
        </button>

      </CardSsection>
    </>
  )
}