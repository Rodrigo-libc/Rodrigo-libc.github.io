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

Vocês vão precisar instalar o OpenSSH no Termux:

<div class="code-block">
  <pre><code>apt install openssh -y</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 2: Iniciando o servidor SSH

Para iniciar o servidor SSH, faça:

<div class="code-block">
  <pre><code>sshd</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

O serviço agora está sendo iniciado na porta 8022. Você pode verificar os logs com:

<div class="code-block">
  <pre><code>logcat -s 'syslog:*'</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 3: Criando o arquivo de chaves autorizadas

Agora, você precisa colocar sua chave pública OpenSSH no arquivo `~/.ssh/authorized_keys`.  
Esse arquivo precisará ser criado e as permissões definidas para 600:

<div class="code-block">
  <pre><code>touch ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

E para definir as permissões corretamente, faça:

<div class="code-block">
  <pre><code>chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 4: Gerando o par de chaves

Agora, você pode gerar seu par de chaves com o seguinte comando: 

<div class="code-block">
  <pre><code>ssh-keygen</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

Você pode ou não inserir uma frase secreta. Se você não especificar, de qualquer forma, seu par de chaves será salvo em:

<div class="code-block">
  <pre><code>~/.ssh/id_rsa
~/.ssh/id_rsa.pub</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 5: Adicionando a chave ao arquivo autorizado

Agora podemos adicioná-la ao `~/.ssh/authorized_keys`. Faça:

<div class="code-block">
  <pre><code>cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

Cuidado para não errar.  
Em seguida, defina as permissões:

<div class="code-block">
  <pre><code>chmod 600 ~/.ssh/authorized_keys</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 6: Copiando a chave para o cartão SD

Precisamos agora enviar nossa chave pública para o cartão `/sdcard`. Para isso, faça:

<div class="code-block">
  <pre><code>cp ~/.ssh/id_rsa /sdcard</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋</button>
</div>

---

## Passo 7: Enviando a chave para o Windows

Agora, vocês precisam enviar sua chave para o Windows. A forma de fazer isso você escolhe; pode ser por USB, FTP, etc.  

Vocês precisam instalar o PuTTY no Windows. Deixarei o link abaixo.  
Feita a instalação, abram o PuTTYgen (prestem bastante atenção aqui).  

No PuTTY, você precisará convertê-la primeiro para o formato de chave privada do PuTTY.  
Carregue a chave privada (`id_rsa`) e salve a chave privada como um arquivo `.ppk`.  

---

## Passo 8: Conectando via PuTTY

Execute o PuTTY, digite o endereço IP do seu dispositivo Android e use a porta 8022.  
Em **Conexão > SSH > Auth**, você pode procurar o arquivo `.ppk`. Clique em abrir.  

Você pode deixar "login como:" em branco. Pronto!  
Agora você deve estar conectado ao seu dispositivo Android via SSH. Abraço.

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
