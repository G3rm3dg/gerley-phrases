import "./styles/PhrasesBox.css"

function PhrasesBox({quote, handleChangeQuote}) {
    const {phrase, author} = quote

  return (
    <article className="totalBox">
      <h1 className="boxTitle">FAMOUS PHRASES</h1>
      <div className="boxPhrase">
        <p>{phrase}</p>
      </div>
      <button className="boxBtn" onClick={handleChangeQuote}>OTHER PHRASE</button>
      <span className="boxAuthor"> <b>AUTHOR<br/>{author}</b> </span>
    </article>
  );
}
export default PhrasesBox;
