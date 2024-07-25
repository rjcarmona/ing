const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

// This data you can get it inside the connectedCallback
// i.e:
// async connectedCallback() {
//   this.igcData = await restService.getIgcData();
// }
let igcData = ["IGC1", "IGC2", "IGC3", "IGC4"];

// In case of getting an array of objects

// let igcDataObj = [
//   {
//     name: "IGC1",
//   },
//   {
//     name: "IGC2",
//   },
//   {
//     name: "IGC3",
//   },
//   {
//     name: "IGC4",
//   },
// ];

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

function addIgc(selectedIgc) {
  options.innerHTML = "";
  // this.igcData instead
  igcData.forEach((data) => {
    let isSelected = data === selectedIgc ? "selected" : "";
    let liElement = `<li onclick="updateIgcName(this)" class="${isSelected}">${data}</li>`;
    options.insertAdjacentHTML("beforeend", liElement);
  });

  ////////////////////////////////
  // In case of getting an array of objects

  // igcDataObj.forEach((data) => {
  //   let isSelected = data.name === selectedIgc ? "selected" : "";
  //   let liElement = `<li onclick="updateIgcName(this)" class="${isSelected}">${data.name}</li>`;
  //   options.insertAdjacentHTML("beforeend", liElement);
  // });

  ////////////////////////////////
}
addIgc();

function updateIgcName(selectedLi) {
  searchInp.value = "";
  addIgc(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let results = [];
  const searchStr = searchInp.value.toLowerCase();
  // results = this.igcData instead
  results = igcData
    .filter((data) => data.toLowerCase().includes(searchStr))
    .map((data) => {
      const isSelected =
        data.name == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateIgcName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");

  ////////////////////////////////
  // In case of getting an array of objects

  // results = igcDataObj
  //   .filter((data) => data.name.toLowerCase().includes(searchStr))
  //   .map((data) => {
  //     const isSelected =
  //       data.name == selectBtn.firstElementChild.innerText ? "selected" : "";
  //     return `<li onclick="updateIgcName(this)" class="${isSelected}">${data.name}</li>`;
  //   })
  //   .join("");

  ////////////////////////////////
  options.innerHTML = results
    ? results
    : `<p style="margin-top: 10px;">IGC not found</p>`;
});

// For the <li> tag you could do something like this on Lit
// this.igcValues?.map(val => html`<li>${val}</li>`);
