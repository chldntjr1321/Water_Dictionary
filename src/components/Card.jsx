function Card({ data }) {
  return (
    <>
      <div className="cardbox">
        <span className="kotitle">{`${data.hNm} ${
          data.cNm ? `( ${data.cNm} )` : ''
        }`}</span>
        <br />
        <span className="entitle">{`${data.eNm ? `${data.eNm}` : ''}`} </span>
        <br />
        <span className="explain">{`${
          data.explain ? `${data.explain}` : ''
        }`}</span>
      </div>
    </>
  );
}

export default Card;
