---
layout: post
title: "Acessando o Termux via SSH pelo PuTTY"
date: 2018-04-26
categories: termux, ssh
---

Olá, como pediram, vou mostrar como acessar o **Termux** via SSH pelo **PuTTY**, então vamos lá!

Primeiro de tudo é importante que você tenha conhecimento com sistemas GNU/Linux e redes.

Vocês vão precisar instalar o OpenSSH no Termux:

```bash
apt install openssh -y
```
Para iniciar o servidor SSH faça:

```bash
sshd
```
O serviço agora está sendo iniciado na porta 8022. Você pode fazer:

```bash
logcat -s 'syslog:*'
```

