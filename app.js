const dados = {
  parques: [
    { id:1, nome:"Parque Nacional da Serra do Cipó", descricao:"Cânions, cachoeiras e campos rupestres a 100 km de Belo Horizonte.",
      conteudo:"Um dos destinos de natureza mais procurados de Minas, com rios de água limpa, cachoeiras e vegetação típica da Serra do Espinhaço.",
      cidade:"Santana do Riacho", bioma:"Cerrado", altitude:"1.200 m", melhor_epoca:"Abril a setembro", destaque:true, data:"2025-03-30",
      imagem_principal:"Images/images.jpg",
      trilhas:[ {id:1,nome:"Cachoeira da Farofa",descricao:"Queda de 70 m com piscina natural.",imagem:"Images 2/Cachoeira da farofa.jpg"},
        {id:2,nome:"Cânion das Bandeirinhas",descricao:"Paredões de pedra com mais de 100 m de altura.",imagem:"Images 2/Cânion das Bandeirinhas.jpg"},
        {id:3,nome:"Travessia Lapinha–Tabuleiro",descricao:"Caminhada de 2 dias até a terceira maior cachoeira do Brasil.",imagem:"Images 2/Travessia Lapinha–Tabuleiro.jpg"} ] },
    { id:2, nome:"Parque Nacional do Caparaó", descricao:"Casa do Pico da Bandeira, o terceiro ponto mais alto do Brasil.",
      conteudo:"Montanhas da Mata Atlântica na divisa com o Espírito Santo, com clima frio e vistas de nascer do sol acima das nuvens.",
      cidade:"Alto Caparaó", bioma:"Mata Atlântica", altitude:"2.892 m", melhor_epoca:"Maio a setembro", destaque:true, data:"2025-03-28",
      imagem_principal:"Images/images (1).jpg",
      trilhas:[ {id:1,nome:"Pico da Bandeira",descricao:"Subida com vista de 360° do alto da serra.",imagem:"images 3/Pico da Bandeira.jpg"},
        {id:2,nome:"Vale Verde",descricao:"Área de camping com cachoeiras e poços.",imagem:"images 3/Vale verde.jpg"},
        {id:3,nome:"Cachoeira Bonita",descricao:"Trilha curta e fácil, ideal para famílias.",imagem:"images 3/Cachoeira Bonita.jpg"} ] },
    { id:3, nome:"Parque Estadual do Itacolomi", descricao:"Montanha histórica ao lado de Ouro Preto, ligada ao ciclo do ouro.",
      conteudo:"Combina trilhas de montanha, antigas estradas de escravos e o Pico do Itacolomi, símbolo de Ouro Preto.",
      cidade:"Ouro Preto", bioma:"Mata Atlântica e Cerrado", altitude:"1.772 m", melhor_epoca:"Maio a outubro", destaque:false, data:"2025-03-27",
      imagem_principal:"Images/images (2).jpg",
      trilhas:[ {id:1,nome:"Pico do Itacolomi",descricao:"Subida de 3 h até o topo de rocha.",imagem:"images 4/Pico do Itacolomi.jpg"},
        {id:2,nome:"Calçadão dos Escravos",descricao:"Trecho de calçamento do século XVIII.",imagem:"images 4/Calçadão dos Escravos.jpg"},
        {id:3,nome:"Cachoeira do Bicame",descricao:"Pequena queda com poço para banho.",imagem:"images 4/Cachoeira do Bicame.jpg"} ] },
    { id:4, nome:"Parque Nacional da Serra da Canastra", descricao:"Nascente do Rio São Francisco e queijo famoso.",
      conteudo:"Chapadões, cachoeiras e fauna do Cerrado, como lobo-guará e tamanduá-bandeira, na região do queijo Canastra.",
      cidade:"São Roque de Minas", bioma:"Cerrado", altitude:"1.496 m", melhor_epoca:"Maio a setembro", destaque:true, data:"2025-03-25",
      imagem_principal:"Images/images (3).jpg",
      trilhas:[ {id:1,nome:"Cachoeira Casca d'Anta",descricao:"Queda de 186 m, a maior da serra.",imagem:"images 5/Cachoeira Casca d'Anta.jpg"},
        {id:2,nome:"Nascente do São Francisco",descricao:"Ponto de origem do Velho Chico.",imagem:"images 5/Nascente do São Francisco.jpg"},
        {id:3,nome:"Chapadão da Zagaia",descricao:"Planalto com vista ampla e fauna silvestre.",imagem:"images 5/Chapadão da Zagaia.jpg"} ] },
    { id:5, nome:"Parque Estadual do Ibitipoca", descricao:"Grutas, picos e águas cristalinas na Zona da Mata.",
      conteudo:"Um dos parques mais visitados do estado, com a Gruta dos Moreiras, a Lagoa Seca e o Pico do Pião.",
      cidade:"Lima Duarte", bioma:"Mata Atlântica", altitude:"1.784 m", melhor_epoca:"Abril a setembro", destaque:false, data:"2025-03-22",
      imagem_principal:"Images/images (4).jpg",
      trilhas:[ {id:1,nome:"Gruta dos Moreiras",descricao:"Caverna de quartzito com rio interno.",imagem:"images 6/Gruta dos Moreiras.jpg"},
        {id:2,nome:"Janela do Céu",descricao:"Mirante com piscinas naturais e pôr do sol.",imagem:"images 6/Janela do Céu.jpg"},
        {id:3,nome:"Ponte de Pedra",descricao:"Arco natural sobre o rio, a 3 km da portaria.",imagem:"images 6/Ponte de Pedra.jpg"} ] }
  ]
};

// Imagem substituta (SVG) caso o arquivo ainda não exista na pasta
function semImagem(txt) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#cfd9d2'/><text x='50%' y='50%' font-family='sans-serif' font-size='28' fill='#1f4d3a' text-anchor='middle'>${txt}</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
const img = (src, alt, cls = "") =>
  `<img src="${src}" alt="${alt}" class="${cls}" onerror="this.onerror=null;this.src=semImagem(this.alt)">`;

function montarHome() {
  const destaques = dados.parques.filter(p => p.destaque);
  document.getElementById("carrossel").innerHTML = `
    <div class="carousel-indicators">
      ${destaques.map((_, i) => `<button type="button" data-bs-target="#carrossel" data-bs-slide-to="${i}" class="${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`).join("")}
    </div>
    <div class="carousel-inner">
      ${destaques.map((p, i) => `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <a href="detalhe.html?id=${p.id}">${img(p.imagem_principal, p.nome)}</a>
          <div class="carousel-caption">
            <h3>${p.nome}</h3><p class="mb-0">${p.descricao}</p>
          </div>
        </div>`).join("")}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carrossel" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Anterior</span></button>
    <button class="carousel-control-next" type="button" data-bs-target="#carrossel" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Próximo</span></button>`;

  document.getElementById("lista-cards").innerHTML = dados.parques.map(p => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100">
        <a href="detalhe.html?id=${p.id}">${img(p.imagem_principal, p.nome, "card-img-top")}</a>
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5"><a href="detalhe.html?id=${p.id}">${p.nome}</a></h3>
          <p class="card-text">${p.descricao}</p>
          <p class="small text-muted mb-3">${p.cidade} · ${p.bioma}</p>
          <a href="detalhe.html?id=${p.id}" class="btn btn-terra mt-auto">Ver detalhes</a>
        </div>
      </div>
    </div>`).join("");
}

function montarDetalhe() {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = dados.parques.find(x => x.id === id);
  const info = document.getElementById("info-geral");
  if (!p) {
    info.innerHTML = `<div class="alert alert-warning">Parque não encontrado. <a href="index.html">Voltar para a página inicial</a>.</div>`;
    return;
  }
  document.title = p.nome + " · Parques de Minas";
  const dataFmt = new Date(p.data + "T00:00:00").toLocaleDateString("pt-BR");
  info.innerHTML = `
    <h1>${p.nome}</h1>
    <div class="row g-4 mt-1">
      <div class="col-lg-7">${img(p.imagem_principal, p.nome, "detalhe-img")}</div>
      <div class="col-lg-5">
        <p class="lead">${p.descricao}</p>
        <p>${p.conteudo}</p>
        <dl class="ficha row">
          <dt class="col-5">Cidade</dt><dd class="col-7">${p.cidade}</dd>
          <dt class="col-5">Bioma</dt><dd class="col-7">${p.bioma}</dd>
          <dt class="col-5">Altitude máxima</dt><dd class="col-7">${p.altitude}</dd>
          <dt class="col-5">Melhor época</dt><dd class="col-7">${p.melhor_epoca}</dd>
          <dt class="col-5">Cadastrado em</dt><dd class="col-7">${dataFmt}</dd>
        </dl>
      </div>
    </div>`;
  document.getElementById("fotos").innerHTML = `
    <h2>Trilhas e atrações</h2>
    <div class="row g-4">
      ${p.trilhas.map(t => `
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="card foto-item h-100">
            ${img(t.imagem, t.nome, "card-img-top")}
            <div class="card-body"><h3 class="h6">${t.nome}</h3><p class="small mb-0">${t.descricao}</p></div>
          </div>
        </div>`).join("")}
    </div>`;
}