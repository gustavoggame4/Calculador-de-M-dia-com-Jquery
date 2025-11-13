# 📝 Formulário de Cálculo de Média com jQuery

Este projeto apresenta um formulário interativo para calcular a média final de um aluno com base nas notas dos quatro bimestres e, quando necessário, a nota da prova final. Além disso, o projeto inclui validações utilizando **jQuery**, como limite máximo de pontos e suporte a notas fracionadas.

---

## 📌 Funcionalidades do Projeto

### ✔ Cálculo da média dos 4 bimestres

O aluno informa:

* Nome
* Nota do 1º bimestre
* Nota do 2º bimestre
* Nota do 3º bimestre
* Nota do 4º bimestre

A média é calculada automaticamente ao clicar no botão **Calcular Média**.

---

## 📊 Regras de Avaliação

* **Média menor que 4,0** → ❌ Reprovado direto
* **Média entre 4,0 e 5,9** → 🟡 Vai para a Final

  * Aparece um campo extra para inserir a nota da prova final
  * Soma: **(Média + Nota da Final) ≥ 10 → Aprovado na Final**
  * Caso contrário → ❌ Reprovado na Final
* **Média 6,0 ou acima** → ✅ Aprovado direto

---

## ⚙️ Validações Implementadas

### 🔹 Utilizando jQuery

* Aceita **notas fracionadas** (ex.: 3.7)
* Impede valores acima de **10 pontos**
* Impede valores negativos
* Bloqueia campos vazios
* Normaliza números com vírgula (3,7 → 3.7)
* Mostra ou esconde o campo Final conforme necessário

---

## 📂 Estrutura de Arquivos

```
/projeto
   index.html
   /css
      style.css
   /js
      jquery-3.7.1.min.js
      script.js
```

---

## 🧩 Tecnologias Utilizadas

### **HTML5**

Para estruturação do formulário.

### **CSS3**

Para estilização moderna e responsiva.

### **jQuery 3.7.1 (versão offline incluída)**

Usado para:

* Eventos
* Efeitos de exibição
* Validação
* Manipulação de inputs

---

## 🚀 Como Executar o Projeto

1. Baixe ou clone o repositório
2. Abra o arquivo **index.html** em qualquer navegador
3. Certifique-se de que a pasta **js** contém o arquivo:

   * `jquery-3.7.1.min.js`
4. Preencha as notas e clique em **Calcular Média**

---

## 📘 Explicação dos Principais Métodos jQuery

* `$(document).ready()` → Inicializa o jQuery após carregar a página
* `$("#id")` → Seleciona elementos
* `.val()` → Lê ou altera valores
* `.show()` / `.hide()` → Exibe/oculta campos
* `.on("click")` → Evento ao clicar
* `.text()` → Altera o texto do resultado
* `.css()` → Estiliza elementos dinamicamente

---
