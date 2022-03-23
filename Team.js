import Employee from "./Employee"

export default function Team() {
  return (
<div id="team" class="text-center">
        <div class="container">
          <div class="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            <Employee urlImage="img/team/01.jpg" nome="John Doe" cargo="Director" />
            <Employee urlImage="img/team/02.jpg" nome="Mike Doe" cargo="Senior Marketing" />
            <Employee urlImage="img/team/03.jpg" nome="Jane Doe" cargo="Senior Designer" />
            <Employee urlImage="img/team/04.jpg" nome="Karen Doe" cargo="Project Manager" />
          </div>
        </div>
      </div>
  );
}