document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`
    );
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentHTML(
      "beforeend",
      `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>`
    );
  //<a class="btn btn-primary btn-sm" href="WE_pages.html" role="button">Get Started</a>

  const body = document.querySelector("body");
  const navbar = `<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="homepage.html">   </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item">
                <a class="btn btn-primary me-md-2 ${
                  window.location.href.includes("Outliers_WE.html")
                    ? "active"
                    : ""
                }" href="../Outliers_WE.html" role="button">Full Text</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary me-md-2 ${
                  window.location.href.includes("Outliers_SG.html")
                    ? "active"
                    : ""
                }" href="../Outliers_SG.html" role="button">Less Text</a>
              </li>
              <li class="nav-item navbar-nav navbar-right">
                <a class="btn btn-primary ${
                  window.location.href.includes("Outlierstest.html")
                    ? "active"
                    : ""
                }" href="../Outlierstest.html" role="button">Videos</a>
              </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link" href="index.html">Go Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  body.innerHTML = navbar + body.innerHTML;
});
