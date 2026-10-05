# Nola Bar — site

Site novo do Nola Bar (balada em Vila Madalena, Sao Paulo), feito pela ereio em
outubro de 2026 para substituir o site antigo em Wix (`nolabar.com.br`).

Uma pagina so, HTML estatico, sem etapa de build: a Vercel serve o `index.html`
direto do repositorio.

## Como rodar

Nao precisa instalar nada. Abra o `index.html` no navegador, ou sirva a pasta:

```
python3 -m http.server 8000
```

Deploy: a Vercel publica a branch automaticamente. Nao ha Build Command.

## A agenda muda toda semana: so o `agenda.js`

As festas moram em `agenda.js`, um bloco por festa (data, nome, detalhe, hora,
link do Sympla, esgotado). O site:

- escreve o dia da semana sozinho;
- esconde a festa DEPOIS que ela acaba (ate as 6h do dia seguinte), entao nao
  precisa apagar as passadas na hora;
- mostra "Ingressos" quando ha link e "Esgotado" quando `esgotado: true`; a
  "Lista VIP" (WhatsApp) aparece sempre;
- sem nenhuma festa futura, mostra um recado apontando para o Instagram.

O cabecalho do proprio `agenda.js` explica o formato. Nao e preciso tocar no
`index.html` para trocar a agenda.

## O que tem na pagina

| Secao | O que faz |
|---|---|
| Cortina | Ao abrir o site, duas folhas pretas cobrem tudo e o logo do Nola acende no meio como um neon ligando; um fio magenta acende na juncao e as folhas correm para os lados (2 segundos). Pedido dela, "igual o da AMGlobal mas do Nola". Com movimento reduzido, nasce aberta |
| Abertura | Um SLIDE de quatro fotos da casa em rodizio (8s cada, aproximacao lenta, um banho de cor neon diferente em cada uma, linhas finas de tela antiga por cima), a frase da casa como titulo ("A balada mais psicodelica de Sao Paulo", com "psicodelica" acendendo em neon verde e dando um lampejo a cada troca), os dias, dois botoes (lista VIP no WhatsApp e agenda), a barra de quatro tracos que troca a foto e mostra o tempo dela, uma legenda que muda com a foto e, no computador, um selo redondo girando ("Lista VIP, Sex e Sab, 22h as 5h"). Deitadas no computador, em pe no celular. Ela recusou um NOLA gigante em neon: o nome ja esta no logo do cabecalho |
| Faixa | Letreiro rolante com o que tem na casa |
| 01 Agenda | Um cartaz por festa, a partir de `agenda.js` |
| 02 O Nola | A historia em tres tempos (2013, 2023, hoje) e a fachada antiga |
| 03 Aniversario e lista VIP | Aniversario com WhatsApp e mensagem pronta, e a lista VIP. Sem camarote: a casa nao tem mesa para reservar (ela avisou em 05/10/2026) |
| 04 Fotos | Mural de doze fotos das noites, abrindo em tela cheia, e link do Instagram |
| 05 Drinks | Texto da casa e um ESBOCO de lista (ver pendencias) |
| 06 Como chegar | Endereco, dias e horario, contato, Waze e Google Maps, a fachada a noite |
| Rodape | Redes, contato e credito da ereio |

## A pegada: underground neon

- **Fundo preto** (`#060608`), letra de rua grande (Anton), texto em Space
  Grotesk, rotulos e botoes em Press Start 2P (fonte de fliperama, a unica
  coisa boa do site antigo).
- **Neon de verdade**: magenta `#FF2BD6`, verde-limao `#39FF14` e ciano
  `#00E5FF`, sempre como LUZ (text-shadow e box-shadow em camadas), nunca como
  cor chapada. Os botoes sao borda neon que acende ao tocar.
- **Grao** por cima de tudo (SVG de ruido em `mix-blend-mode: soft-light`,
  7% de opacidade) e as pichacoes do Nola ("This is Nola", "nola bar") como
  carimbos tortos.
- **Movimento com proposito**: a palavra "psicodelica" pisca e estabiliza como
  neon ligando (uma vez so), os objetos 3D do Nola flutuam devagar, a faixa
  roda, os blocos sobem ao entrar na tela. Com `prefers-reduced-motion`, nada
  se mexe.
- **Celular primeiro**: cada bloco foi desenhado em 390px e aberto depois para
  o computador. Menu em tela cheia no celular, com o logo por cima e, no pe, o
  botao da lista VIP (que sai do cabecalho) e o horario; cabecalho transparente
  sobre a foto e escuro ao rolar. Nada encosta no cabecalho: a abertura tem
  120px de respiro em cima, o globo comeca abaixo de 220px e, no celular, a
  pichacao e o cubo nem aparecem (encostavam no menu). Botoes sempre na
  largura toda (ou dois lado a lado no cartaz da festa), area de toque de
  44px, secoes mais proximas que no computador.

## Fotos: material provisorio

Todas as imagens em `fotos/` vieram do site antigo do Nola (sao do proprio
Nola), baixadas no original em 05/10/2026 e convertidas para WebP:

| Arquivo | O que e |
|---|---|
| `abertura.webp` / `abertura-cel.webp` | a pista com as luzes laranja (computador) e a pista azul lotada, em pe (celular) |
| `multidao-pb.webp` | multidao em preto e branco, textura de fundo da secao O Nola |
| `fachada-antiga.webp` / `fachada-noite.webp` | a fachada dos primeiros anos e a fachada a noite com a fila |
| `noite-01` a `noite-12` | fotos das noites, para o mural |
| `globo-anel`, `globo-prata`, `cubo`, `anel` | os objetos 3D do site antigo, com transparencia |
| `tag-this-is-nola`, `tag-nola-bar` | as pichacoes |
| `logo-nola.png` | o logo, 450x221, como estava no site antigo |

**Trocar pelas boas quando chegarem**: fotos em alta das noites e da casa, o
logo em vetor (o PNG de 450px e pequeno para o rodape em tela densa).

## Pendencias (dependem da casa)

1. **Cardapio.** A lista da secao Drinks e um esboco escrito a partir do texto
   do site antigo. O cardapio real entra quando a casa mandar (texto ou imagem).
2. **Logo em vetor** e fotos em alta (acima).
3. **Dominio.** `nolabar.com.br` aponta para o Wix. Quando o site for aprovado,
   adicionar o dominio no projeto da Vercel e trocar o DNS.
4. **Agenda.** Os links do Sympla sao os que estavam no site antigo em
   05/10/2026; a casa atualiza o `agenda.js` toda semana.
5. **Facebook.** O link e o da pagina antiga (`facebook.com/NolaBar`); confirmar
   se ainda e usado.

## Contatos usados no site

- WhatsApp da lista VIP: `https://wa.me/message/D5C34BVV3MNXF1` (o link curto
  do WhatsApp Business do Nola, tirado do site antigo)
- WhatsApp direto: 11 98759-0317 (reservas, com mensagem pronta)
- E-mail: nolabarsp@gmail.com
- Instagram: @_nolabar
- Endereco: Rua Mourato Coelho, 1156, Vila Madalena, Sao Paulo, SP, 05417-002

## Detalhes tecnicos

- Um arquivo so. CSS e JavaScript ficam dentro do `index.html`; a agenda em
  `agenda.js`.
- Fontes do Google Fonts (Anton, Press Start 2P, Space Grotesk), com pilha de
  reserva declarada.
- Sem biblioteca, sem framework. A foto em tela cheia usa `<dialog>`.
- Dados estruturados (`NightClub`, schema.org) no `<head>`: endereco, horario,
  telefone e redes.
- Conferencia antes de cada commit: DOM falso (jsdom) montando a agenda,
  escondendo festa passada, abrindo a luz do mural e o menu; navegador
  (puppeteer) em computador e celular, tela por tela, medindo vazamento
  lateral e tamanho de toque dos botoes.
