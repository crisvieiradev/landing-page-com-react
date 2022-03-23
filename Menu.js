export default function Menu() {
  return (
    <div>
      <div id="menu" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
              React Landing Page
            </a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="">
                <a href="#services" class="page-scroll">
                  Services
                </a>
              </li>
              <li class="">
                <a href="#testimonials" class="page-scroll">
                  Testimonials
                </a>
              </li>
              <li class="">
                <a href="#team" class="page-scroll">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      );
      }