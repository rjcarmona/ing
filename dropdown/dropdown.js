const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

// For the <li> tag you could do something like this on Lit
// this.igcValues?.map(val => html`<li>${val}</li>`);
