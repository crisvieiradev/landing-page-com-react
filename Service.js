export default function Service(props) {
  return (
<div class="cold-md-4">
  <i class={props.icon}></i>
<div class="service-desc">
<h3 class="titulo">{props.titulo}</h3>
    <p>
    <p class="descricao">{props.descricao}</p>
    </p>
    </div>
    </div>
  );
}
