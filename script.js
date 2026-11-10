
const imagens = document.querySelectorAll('.galeria-item');
const anterior = document.querySelector('.galeria-seta.anterior');
const proxima = document.querySelector('.galeria-seta.proxima');

let imagemAtual = 0;

function atualizarCarrossel() {
  imagens.forEach((imagem, index) => {
    let posicao = (index - imagemAtual + imagens.length) % imagens.length;

    imagem.classList.remove('ativo', 'oculto');

    imagem.style.order = (posicao + 2) % imagens.length;

    if (posicao === 3) {
      imagem.classList.add('oculto');
    }

    if (posicao === 0) {
      imagem.classList.add('ativo');
    }
  });
}

// Próxima imagem
proxima.addEventListener('click', () => {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  atualizarCarrossel();
});

// Imagem anterior
anterior.addEventListener('click', () => {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
});

// Clicar diretamente em uma imagem
imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => {
    imagemAtual = index;
    atualizarCarrossel();
  });
});

// Inicializar carrossel
atualizarCarrossel();
