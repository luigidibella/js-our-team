const output = document.querySelector(".output");
const output2 = document.querySelector(".output2");

const members = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
  }
]

for(let member of members){
  console.log(member);

  output.innerHTML += `
  
  <div class="col d-flex justify-content-between py-3">
        <div class="card border-0">
        <img src="img/${member.img}" class="card-img-top" alt="${member.nome}">
          <div class="card-body">
            <h5 class="card-title">${member.nome}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${member.ruolo}</h6>
          </div>
        </div>
  </div>
  `
}