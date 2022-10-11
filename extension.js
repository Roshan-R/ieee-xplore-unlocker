let container = document.querySelector('.u-mb-1.u-mt-05.btn-container')
let doi_container = document.querySelector('.u-pb-1.stats-document-abstract-doi')
let doi = doi_container.children[1].innerHTML

let scihub_url = `https://sci-hub.se/${doi}`

let scihub_btn = document.querySelector("#sci-hub")
if (scihub_btn) {
  scihub_btn.remove()
}

container.innerHTML +=
  `
  <div id="sci-hub" class="layout-btn-white cite-this-btn">
    <a href="https://sci-hub.se/${doi}" target='#' class="button">Search on Scihub</a>
  </div>
`
