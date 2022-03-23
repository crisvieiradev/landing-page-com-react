export default function Employee(props) {
  return (
      <div class="col-md-3 col-sm-6 team">
      <div class="thumbnail">
      <img src={props.urlImage} alt="..." class="team-img" />
      <div class="caption">
      <h4 class="nome">{props.nome}</h4> 
      <p class="cargo">{props.cargo}</p>
      </div>
      </div>
      </div>
      );
}