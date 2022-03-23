import Service from "./Service";

export default function Services() {
  return (
<div id="services" class="text-center">
<div class="container">
  <div class="section-title">
    <h2>Our Services</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
      dapibus leonec.
    </p>
  </div>
  <div class="row">
  <Service titulo="Service 1" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon="fa fa-wordpress" />
  <Service titulo="Service 2" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon="fa fa-wordpress" />
  <Service titulo="Service 3" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon="fa fa-wordpress" />
  <Service titulo="Service 4" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon="fa fa-wordpress" />
  </div>
  </div>
  </div>
  );
}


