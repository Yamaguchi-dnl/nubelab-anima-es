# Motion "making of" — Nube Lab

Motion horizontal com 3 vídeos de making of e assinatura final animada com o Nubinho.
Referência pedida: pin do Pinterest https://br.pinterest.com/pin/970525788471216497/
(fundo verde-limão chapado, 3 cards lado a lado, o central em destaque com bloco branco de legenda,
os laterais cortados pela borda) + busca "animação logo com símbolo".
Pedido do cliente: "pode seguir bem a ideia do site".

Arquivos: pasta do Drive https://drive.google.com/drive/folders/11wwJQKhZGtuacaX83Ws3nqWDHsM1DMSj
→ baixar os 3 vídeos para `making-of/videos/` (ainda não estão no projeto).

---

## 1. Por que a referência casa com a marca

| Referência (Pinterest) | Nube Lab |
|---|---|
| Fundo verde-limão chapado | o manual já tem o **amarelo-limão #d2d641**, mesma família de cor |
| 3 cards, central maior e inteiro, laterais cortados | é o **hero em leque** do site (3 cards, showreel no central) |
| Bloco branco embaixo do card com título curto | bloco cinza-claro #f2f2f2 com título em Sugo caixa baixa |
| Carrossel que troca o destaque | a galeria **"feito no lab"** anda na horizontal e o fundo muda de cor a cada reel |
| Logo com símbolo animado | a **nuvem acorda** (cresce com exagero, pisca, sorri) + logo "nube lab" |

## 2. Identidade (do `style.css` e do manual 2026)

- **Cores:** amarelo-limão #d2d641 (fundo principal, como na referência) · índigo #4e24f1 · lilás #e698fd ·
  cinza-escuro #1a1a1a · cinza-claro #f2f2f2 · azure #00abfc (apoio) · laranja #ff5b00 (no máximo 1 detalhe).
- **Tipo:** títulos em **Sugo**, caixa baixa e pesada (`assets/fonts/sugo.woff2`) · apoio em **Montserrat**
  semi-negrito, CAIXA ALTA espaçada, com bolinha antes (estilo "eyebrow" do site).
- **Cantos:** raio 22 px.
- **Curvas:** chegada rápida com pouso macio `cubic-bezier(.16,1,.3,1)` (expo.out) · trocas `cubic-bezier(.65,0,.35,1)` ·
  pops com exagero back.out(1.7).
- **Nubinho:** desenho oficial da nuvem (`assets/img/logo/simbolo.svg`; versão com olhos separados dentro de
  `assets/img/logo/nube-lab.svg`, grupo `.nube-eyes`). Corpo branco ou índigo, dois olhos ovais altos e pretos.
  Os olhos ficam numa camada própria para piscar e olhar.
- **Logo:** `assets/img/logo/nube-lab.svg` (a nuvem fica entre "nube" e "lab").

---

## 3. Roteiro (18 s · 1920×1080 · 30 fps)

> Trocar `[legenda 1/2/3]` pelos nomes reais dos bastidores (máx. 3 palavras cada).

| Tempo | Imagem | Som |
|---|---|---|
| 0,0–1,2 s | Fundo amarelo-limão #d2d641. A palavra "bastidor" bem grande e apagada (#1a1a1a a 6%) sobe ao fundo. Os 3 cards entram de baixo um de cada vez (0,1 s entre eles) com elastic.out e se acomodam: central 100%, laterais 86% de escala, cortados pela borda e girados ±4° | 1ª batida + whoosh |
| 1,2–1,6 s | Uma figurinha "● rec" (ponto vermelho piscando) pula girando no canto do card central. Eyebrow "MAKING OF · NUBE LAB" entra no topo | pop |
| 1,6–5,4 s | **Vídeo 1** tocando no card central. Embaixo, no bloco #f2f2f2, `[legenda 1]` sobe letra a letra por máscara (Sugo, #1a1a1a), com o contador "01/03" em Montserrat | — |
| 5,4–6,1 s | **Troca:** o carrossel desliza para a esquerda (0,7 s, in-out). O card da direita vai ao centro e cresce de 86% para 100%, endireitando o giro. O fundo passa de limão para **lilás #e698fd** | whoosh na batida |
| 6,1–9,9 s | **Vídeo 2**, `[legenda 2]`, "02/03" | — |
| 9,9–10,6 s | **Troca** igual. O fundo passa para **índigo #4e24f1** (o texto da legenda continua no bloco claro) | whoosh |
| 10,6–14,2 s | **Vídeo 3**, `[legenda 3]`, "03/03" | — |
| 14,2–15,0 s | Os laterais saem voando para fora. O card central cresce até tela cheia (raio 22 → 0), como no hero do site. Logo em seguida uma **parede de nuvens** sobe: lilás primeiro, cinza-claro 0,08 s depois, mais lenta | riser |
| 15,0–16,2 s | A parede sai por cima e revela o fundo índigo. O **Nubinho branco** cai do alto, achata ao pousar (1.06/.92), estica (.96/1.05) e assenta. Pisca uma vez (olhos scaleY .08 por 150 ms) e olha para a direita, para onde o logo vai aparecer | pop fofo + blink |
| 16,2–17,2 s | O logotipo "nube lab" se monta ao lado: as letras sobem por máscara (stagger 0,02 s). A nuvem do logo é o próprio Nubinho, que desliza até o lugar dele, entre "nube" e "lab" | marimba de 2 notas |
| 17,2–18,0 s | Embaixo entra "@nubelab · bastidor real vende mais que promessa." em Montserrat CAIXA ALTA espaçada, #d2d641. O Nubinho fecha os olhos sorrindo. Segura 0,5 s | assinatura final |

**Versão 9:16 (Reels), se pedirem:** os cards ficam um pouco sobrepostos na vertical, o central na faixa do meio. A assinatura fica empilhada (Nubinho em cima e logo embaixo).

---

## 4. Prompts

### 4.1 Para um motion designer, ou para gerar em código (HTML + GSAP, como a vinheta do podcast)

```
Crie um motion horizontal de 18 s (1920×1080, 30 fps) para a Nube Lab, apresentando 3 vídeos de making of
num carrossel de cards e fechando com a assinatura animada do mascote Nubinho. Siga a referência do
Pinterest (fundo de cor chapada, 3 cards lado a lado, central em destaque com bloco de legenda embaixo,
laterais cortados pela borda) e a linguagem de movimento do site da Nube (assets/js/motion.js).

Arquivos: making-of/videos/01.mp4, 02.mp4, 03.mp4 (mudos, encaixados em object-fit: cover no card);
logo assets/img/logo/nube-lab.svg; Nubinho do grupo .nube-body + .nube-eyes do mesmo SVG;
fontes Sugo (assets/fonts/sugo.woff2) e Montserrat.

Paleta: #d2d641 (fundo inicial), #e698fd, #4e24f1, #1a1a1a, #f2f2f2. Raio 22 px. Sem gradiente, sem 3D, sem glow.

Cards: 1:1,25 (vertical), central com 520 px de largura, laterais a 86% de escala, rotação ±4°,
deslocados ±62% e cortados pela borda. Bloco de legenda #f2f2f2 com título em Sugo 800 caixa baixa
#1a1a1a, contador "01/03" em Montserrat 600 maiúscula espaçada (letter-spacing .14em) e sombra suave
0 30px 60px rgba(26,26,26,.18).

Movimento:
- Entrada dos cards: y 120 → 0, scale .7 → final, stagger 0,1 s, elastic.out(1,.75).
- Legendas: SplitText por letra, yPercent 115 → 0, stagger .018, expo.out, 0,6 s.
- Troca do carrossel (0,7 s, cubic-bezier(.65,0,.35,1)): todos os cards deslizam um passo para a
  esquerda; o que chega ao centro vai para scale 1 / rot 0; o fundo faz crossfade para a próxima cor
  (limão → lilás → índigo). O vídeo do novo card central dá play no fim da troca.
- Saída: os laterais voam para fora (x ±140%, rot ±12°); o central escala até tela cheia com raio 22 → 0,
  power2.inOut; parede dupla de nuvens com borda em gomos (lilás e depois cinza-claro, +0,08 s,
  power3.inOut) cobre e revela o fundo índigo.
- Nubinho: cai de y -400, pousa com squash 1.06/.92 → stretch .96/1.05 → 1/1 (back.out);
  pisca (olhos scaleY .08, 150 ms) e os olhos deslizam 6 px para a direita.
- Logo: letras do "nube lab" sobem por máscara; o Nubinho desliza e vira a nuvem do logo, entre "nube" e "lab" (match na
  posição e na escala do grupo da nuvem no SVG).
- Linha final em Montserrat maiúscula espaçada #d2d641; Nubinho fecha os olhos sorrindo.
- Nenhum corte seco: cada saída sobrepõe a entrada seguinte. Acentos na trilha: 0 s, 5,4 s, 9,9 s,
  14,2 s, 15,0 s, 17,2 s.

Entregar timeline única com window.__seek(t), window.__duration e window.__ready para render quadro a
quadro (mesmo esquema de vinheta-podcast/render/render.mjs), além de MP4 em 16:9 e, se der, 9:16.
```

### 4.2 Para gerador de vídeo com IA (Runway, Kling, Veo, Sora)

IA ainda erra texto e logo. Gere só o movimento, sem textos, e aplique os vídeos reais, o logo e a
tipografia depois, na edição. Envie como imagem de referência o print do pin e o `simbolo.svg` exportado em PNG.

```
18-second horizontal 16:9 motion graphics, flat 2D, clean vector shapes, no gradients, no 3D, no
photorealism. Solid muted lime yellow #d2d641 background. Three vertical rounded-corner cards (22px
radius) in a row: the center card large and fully visible with a white caption block underneath, the two
side cards smaller, slightly tilted and cropped by the frame edges. Each card holds a placeholder video
area. Cards pop in from the bottom with an elastic bounce, staggered.
Every ~4 seconds the carousel slides smoothly to the left, the next card scales up into the center and
the background color cross-fades: lime yellow → pastel lilac #e698fd → vivid indigo #4e24f1.
At 14s the side cards fly out, the center card expands to full screen, a wall of puffy lilac clouds
followed by light gray clouds rises and wipes the frame, revealing an indigo background.
A cute white cartoon cloud mascot with two tall black oval eyes drops in from the top, squashes on landing,
stretches, blinks once, looks to the right, then closes its eyes in a happy smile. Empty space to its right
for a logo.
Playful but premium, Brazilian creative agency, generous negative space, snappy overshoot,
character-animation principles, smooth ease-out, no hard cuts.
```

**Negativo:** `3d render, realistic, gradients, glow, neon, lens flare, glitch, extra characters, distorted text, misspelled words, busy background, camera shake`

---

## 5. Falta antes de produzir

- [ ] Baixar os 3 vídeos do Drive para `making-of/videos/` e conferir a duração (cada um precisa de ~4 s úteis).
- [ ] Definir as 3 legendas (ex.: "roteiro", "gravação", "edição").
- [ ] Confirmar a frase da assinatura (proposta: a do site, "bastidor real vende mais que promessa.") e o @.
- [ ] Trilha: fechar antes e animar em cima dos 6 acentos.
- [ ] Licença da Sugo para uso comercial (ver LEIA-ME).
