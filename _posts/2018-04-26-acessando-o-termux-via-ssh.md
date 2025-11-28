---
layout: post
title: "Acessando o Termux via SSH pelo PuTTY"
date: 2018-04-26
categories: termux, ssh
---

Olá, como pediram, vou mostrar como acessar o **Termux** via SSH pelo **PuTTY**, então vamos lá!

Primeiro de tudo é importante que você tenha conhecimento com sistemas GNU/Linux e redes.

Vocês vão precisar instalar o OpenSSH no Termux:

<!-- Bloco de código estilizado com botão de copiar -->
<div class="code-block">
  <pre><code>apt install openssh -y</code></pre>
  <button class="copy-btn" onclick="copyCode(this)">📋 Copiar</button>
</div>

<style>
.code-block {
  position: relative;
  background-color: #f5f5f5; /* fundo claro */
  border-radius: 8px;
  padding: 12px;
  font-family: monospace;
  margin-bottom: 16px;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  color: #333; /* texto escuro */
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

Para iniciar o servidor SSH faça:

```bash
sshd
```
O serviço agora está sendo iniciado na porta 8022. Você pode fazer:

```bash
logcat -s 'syslog:*'
```
para visualizar a saída de log.

Agora você precisa colocar sua chave pública OpenSSH no arquivo ~/.ssh/authorized_keys.
Se o arquivo não existir, crie com:

```bash
touch ~/.ssh/authorized_keys
```
Defina as permissões corretas:

```bash
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```
Agora você pode gerar seu par de chaves com:

```bash
ssh-keygen
```
Você pode ou não inserir uma frase secreta.

Por padrão, seu par de chaves será salvo em:

```bash
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
```
Adicione a chave pública ao authorized_keys:

```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Agora precisamos enviar nossa chave privada para o cartão /sdcard:

```bash
cp ~/.ssh/id_rsa /sdcard
```

Depois, transfira a chave para o Windows (via USB, FTP ou outro método).

No Windows, instale o PuTTY e abra o PuTTYgen.

Converta a chave privada para o formato `.ppk`

Salve a chave privada como um arquivo `.ppk`

No PuTTY:

Digite o endereço IP do seu dispositivo Android.

Porta: 8022

Em Conexão > SSH > Auth, selecione o arquivo `.ppk`

Pode deixar “login como:” em branco.

Clique em Abrir para se conectar.

Se tudo estiver correto, você estará conectado ao seu dispositivo Android via SSH.

Abraço!

