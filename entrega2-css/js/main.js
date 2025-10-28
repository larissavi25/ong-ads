// Atualiza o ano no rodapé automaticamente
document.querySelectorAll('#year, #year2').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Máscara para CPF
document.getElementById('cpf')?.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = value;
});

// Máscara para telefone
document.getElementById('telefone')?.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
  e.target.value = value;
});

// Máscara para CEP
document.getElementById('cep')?.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  e.target.value = value;
});
