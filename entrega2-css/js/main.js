// Atualiza o ano no rodapé automaticamente
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Máscaras de input (CPF, telefone, CEP)
function applyMask(id, regexList) {
  document.getElementById(id)?.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    regexList.forEach(r => value = value.replace(r.pattern, r.replace));
    e.target.value = value;
  });
}

applyMask('cpf', [
  { pattern: /(\d{3})(\d)/, replace: '$1.$2' },
  { pattern: /(\d{3})(\d)/, replace: '$1.$2' },
  { pattern: /(\d{3})(\d{1,2})$/, replace: '$1-$2' }
]);

applyMask('telefone', [
  { pattern: /^(\d{2})(\d)/g, replace: '($1) $2' },
  { pattern: /(\d{5})(\d{4})$/, replace: '$1-$2' }
]);

applyMask('cep', [
  { pattern: /(\d{5})(\d)/, replace: '$1-$2' }
]);

// Menu hambúrguer
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggle?.addEventListener('click', () => {
  navList.classList.toggle('active');
});
