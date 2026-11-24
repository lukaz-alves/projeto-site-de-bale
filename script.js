
const imagens = document.querySelectorAll('.galeria-item');
const anterior = document.querySelector('.galeria-seta.anterior');
const proxima = document.querySelector('.galeria-seta.proxima');

let imagemAtual = 0;

function atualizarCarrossel() {
  imagens.forEach((imagem, index) => {
    const posicao = (index - imagemAtual + imagens.length) % imagens.length;

    imagem.classList.remove('ativo', 'oculto');

    if (posicao === imagens.length - 1) {
      imagem.style.order = 0;
    } 
    else if (posicao === 0) {
      imagem.style.order = 1;
    } 
    else {
      imagem.style.order = 2;
    }

    if (posicao > 1 && posicao < imagens.length - 1) {
      imagem.classList.add('oculto');
    }

    if (posicao === 0) {
      imagem.classList.add('ativo');
    }
  });
}

proxima.addEventListener('click', () => {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  atualizarCarrossel();
});

anterior.addEventListener('click', () => {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
});

imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => {
    imagemAtual = index;
    atualizarCarrossel();
  });
});

atualizarCarrossel();

const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const numeroProfessora = "5511942040045";

  const nome = formulario.elements["nome"].value;
  const idade = formulario.elements["idade"].value;
  const whatsapp = formulario.elements["whatsapp"].value;
  const turma = formulario.elements["turma"].value;

  const mensagem = 
`Olá, professora Camilla! Gostaria de agendar uma aula experimental.

*Informações da aluna:*

Nome: ${nome}
Idade: ${idade} anos
WhatsApp do responsável: ${whatsapp}
Turma de interesse: ${turma}

Aguardo seu retorno!`;

  const link = `https://wa.me/${numeroProfessora}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});

function abrirZoom(src) {
  document.getElementById('img-zoom').src = src;
  document.getElementById('modal-zoom').style.display = 'flex';
}
function fecharZoom() {
  document.getElementById('modal-zoom').style.display = 'none';
}

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  btnTopo.classList.toggle("visivel", window.scrollY > 300);
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});