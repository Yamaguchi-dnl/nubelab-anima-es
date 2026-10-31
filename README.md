# Nube Lab — motion

Vídeos animados da Nube Lab feitos em HTML + GSAP e gravados quadro a quadro em MP4.
Fica separado do repositório do site (`nubelab`) para nada disto ser publicado na Vercel.

## Pastas
- `making-of/`: motion de 6 s com 3 vídeos de bastidor em carrossel (`making-of.html`) e
  assinatura de 3,8 s só com o Nubinho (`assinatura.html`). MP4s prontos ao lado.
- `vinheta-podcast/`: vinhetas do PodCriar / Nubecast e o gravador (`render/render.mjs`).
- `assets/`: só o que os motions usam do site (fonte Sugo, GSAP, favicon e os reels provisórios).

## Ver no navegador
Nesta pasta:

```bash
python -m http.server 5510
```

e abrir http://localhost:5510/making-of/making-of.html (clique repete a animação).

## Gravar o MP4
Precisa de Node e do Google Chrome instalados. Na primeira vez, em `vinheta-podcast/render`:

```bash
npm install
```

Com o servidor acima rodando, em `vinheta-podcast/render`:

```bash
node render.mjs --name making-of --url http://localhost:5510/making-of/making-of.html
node render.mjs --name assinatura --url http://localhost:5510/making-of/assinatura.html
```

O MP4 sai em `vinheta-podcast/` (ex.: `making-of-16x9.mp4`); mover para `making-of/`.
Para conferir só alguns instantes: `--stills 1,2.5,4` (PNGs em `render/stills/`).

## Trocar os vídeos do making of
1. Salvar os 3 vídeos em `making-of/videos/`.
2. No topo do script de `making-of/making-of.html`, editar a lista `VIDEOS`
   (`src`, `from` = segundo onde começa o trecho, `legenda`).
3. Gravar de novo.

Hoje a lista usa 3 reels do site como provisórios (`assets/video/reels/`).

## Atenção
A fonte Sugo (`assets/fonts/sugo.woff2`) tem licença de uso pessoal: manter este repositório
**privado** e regularizar a licença antes de publicar os vídeos comercialmente (zerofonts.com).
