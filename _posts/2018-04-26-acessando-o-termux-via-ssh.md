---
layout: post
title: "Acessando o Termux via SSH pelo PuTTY"
date: 2018-04-26
categories: termux, ssh
---

Olá! Como pediram, vou mostrar como acessar o Termux via SSH pelo PuTTY. Então, vamos lá!  
Primeiro de tudo, é importante que você tenha conhecimento em sistemas GNU/Linux e redes.  

---

## Passo 1: Instalando o OpenSSH no Termux

<div class="code-block">
  <pre><code>apt install openssh -y</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 2: Iniciando o servidor SSH

<div class="code-block">
  <pre><code>sshd</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 3: Verificando logs

<div class="code-block">
  <pre><code>logcat -s 'syslog:*'</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 4: Criando arquivo de chaves autorizadas

<div class="code-block">
  <pre><code>touch ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn">📋</button>
</div>

<div class="code-block">
  <pre><code>chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 5: Gerando o par de chaves

<div class="code-block">
  <pre><code>ssh-keygen</code></pre>
  <button class="copy-btn">📋</button>
</div>

<div class="code-block">
  <pre><code>~/.ssh/id_rsa
~/.ssh/id_rsa.pub</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 6: Adicionando chave ao arquivo autorizado

<div class="code-block">
  <pre><code>cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn">📋</button>
</div>

<div class="code-block">
  <pre><code>chmod 600 ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 7: Copiando a chave para o cartão SD

<div class="code-block">
  <pre><code>cp ~/.ssh/id_rsa /sdcard</code></pre>
  <button class="copy-btn">📋</button>
</div>

---

## Passo 8: Enviando a chave para o Windows

Vocês precisam instalar o PuTTY no Windows e abrir o PuTTYgen.  
Depois, carregue a chave privada (`id_rsa`) e salve como `.ppk`.

---

## Passo 9: Conectando via PuTTY

Digite o IP do dispositivo Android e use a porta 8022.  
Em **Conexão > SSH > Auth**, selecione o arquivo `.ppk` e clique em abrir.  
Pronto! Agora você está conectado via SSH.

---

<style>
.code-block {
  position: relative;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 12px;
  font-family: monospace;
  margin-bottom: 16px;
  overflow-x: auto;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e0e0e0;
  border: none;
  border-radius: 4px;
  padding: 6px;
  cursor: pointer;
  font-size: 1.1em;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.parentElement.querySelector('code');
      if(!codeBlock) return;
      const code = codeBlock.innerText.trim();
      navigator.clipboard.writeText(code).then(() => {
        // Feedback visual
        button.textContent = '✅';
        setTimeout(() => button.textContent = '📋', 1000);
      }).catch(err => {
        console.error('Erro ao copiar:', err);
      });
    });
  });
});
</script>
