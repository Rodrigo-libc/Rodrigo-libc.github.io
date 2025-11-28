---
layout: post
title: "Acessando o Termux via SSH pelo PuTTY"
date: 2018-04-26
categories: termux, ssh
---

Olá, como pediram, aqui vai o passo a passo para acessar o Termux via SSH usando o PuTTY:

---

### Atualizando o Termux

Primeiro, atualize os pacotes do Termux para garantir que tudo esteja atualizado:

<div class="code-block">
  <pre><code>pkg update && pkg upgrade</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋 Copiar</button>
</div>

---

### Instalando o OpenSSH

Depois, instale o OpenSSH, que permite o acesso remoto:

<div class="code-block">
  <pre><code>pkg install openssh</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋 Copiar</button>
</div>

---

### Iniciando o servidor SSH

Agora, inicie o servidor SSH:

<div class="code-block">
  <pre><code>sshd</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋 Copiar</button>
</div>

---

### Obtendo o IP do Termux

Para conectar via PuTTY, você precisa do IP do seu dispositivo:

<div class="code-block">
  <pre><code>ifconfig</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋 Copiar</button>
</div>

Procure pelo IP na interface `wlan0`, geralmente algo como `192.168.x.x`.

---

### Conectando com PuTTY

Abra o PuTTY no computador e conecte-se usando:  

- **Host Name (or IP address):** `<seu-ip-aqui>`  
- **Port:** `8022` (porta padrão do Termux SSH)  
- **Connection type:** SSH  

Depois clique em **Open** e faça login com seu usuário do Termux (`u0_aXXX`) e a senha que você configurou.

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

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  color: #333;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e0e0e0;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.2s;
}

.copy-btn:hover {
  background: #d0d0d0;
}
</style>

<script>
function copyCode(button) {
  const code = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(code).catch(err => console.error(err));
}
</script>
