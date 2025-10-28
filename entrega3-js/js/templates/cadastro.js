// js/templates/cadastro.js
export const template = `
<section class="cadastro">
  <h2>Cadastro de Voluntário / Doador</h2>
  <p>Preencha o formulário abaixo para se juntar a nós!</p>

  <form id="formCadastro" class="form">
    <label for="nome">Nome completo:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>

    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" required pattern="[0-9]{10,11}">

    <label for="tipo">Quero ser:</label>
    <select id="tipo" name="tipo" required>
      <option value="">Selecione</option>
      <option value="voluntario">Voluntário</option>
      <option value="doador">Doador</option>
    </select>

    <label for="mensagem">Mensagem (opcional):</label>
    <textarea id="mensagem" name="mensagem" rows="4"></textarea>

    <button type="submit" class="btn">Enviar</button>
  </form>
</section>
`;
