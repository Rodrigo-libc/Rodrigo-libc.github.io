---
layout: post
title: "Acessando o Termux via SSH pelo PuTTY"
date: 2018-04-26
categories: termux, ssh
---

Olá, como pediram, vou mostrar como acessar o **Termux** via SSH pelo **PuTTY**, então vamos lá!

Primeiro de tudo é importante que você tenha conhecimento com sistemas GNU/Linux e redes.

Vocês vão precisar instalar o OpenSSH no Termux:

<div class="code-wrapper">
  <pre><code id="cmd1">apt install openssh -y</code></pre>
  <button class="copy-btn" onclick="copyCode('cmd1')">
    📋 Copiar código
  </button>
</div>

<style>
.code-wrapper {
  position: relative;
  background: #1e1e1e; /* fundo escuro */
  color: #f5f5f5; /* texto claro */
  padding: 1em;
  border-radius: 6px;
  margin-bottom: 1em;
  font-family: monospace;
}

.copy-btn {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.2em 0.5em;
  cursor: pointer;
  font-size: 0.9em;
}

.copy-btn:hover {
  background: #0056b3;
}
</style>

<script>
function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert('Comando copiado!');
  });
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

