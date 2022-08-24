const baseUrl =
  "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=";

let startPage = 1;
const startApp = async () => {
  updatePage(startPage);
};

const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const updatePage = async (page: number) => {
  document.getElementById("loader")!.style.display = "block";
  const table = document.querySelector("table tbody");
  const label = document.querySelector(".btn-group label");
  const prevBtn = document.querySelector("button#prevBtn") as HTMLButtonElement;

  if (page < 1) page = 1;
  if (page === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  const dataUrl = `${baseUrl}${page}`;
  const data = await getData(dataUrl);

  let result = "";
  data.results?.[0][page].forEach((item) => {
    result += `<tr data-entryid=${item.id}>
     <td>${item.id}</td>
     <td>${item.gender}</td>
     <td>${item.age}</td>
     </tr>`;
  });
  table!.innerHTML = result;
  label!.innerHTML = `Showing Page ${page}`;
  document.getElementById("loader")!.style.display = "none";
};

const nextPage = () => {
  startPage++;
  updatePage(startPage);
};

const previousPage = () => {
  startPage--;
  updatePage(startPage);
};

document.addEventListener("DOMContentLoaded", startApp);

window.nextPage = nextPage;
window.previousPage = previousPage;
