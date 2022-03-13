import MovieStars from "components/MovieStars";
import "./style.css";
function MovieScore()
{
    const score = 3.5;
    const count = 13;
return (
/* Operador abaixo vai verificar se nota é maior que 0, se for
    vai mostrar e o tofixed é para arredondar uma casa e o : é senão */
    <div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="dsmovie-score-count">{count} avaliações</p>
</div>
);

}

export default MovieScore;