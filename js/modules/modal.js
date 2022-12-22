export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const ContainerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && ContainerModal) {
    function abrirModal(event) {
      event.preventDefault();
      ContainerModal.classList.add('ativo');
    }
    function fecharModal(event) {
      ContainerModal.classList.remove('ativo');
    }
    function sairModal(event) {
      if (event.target === this) fecharModal();
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    ContainerModal.addEventListener('click', sairModal);
  }
}
