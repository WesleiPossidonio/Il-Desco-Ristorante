# Movimento — chegar à mesa

A sequência começa na atmosfera natalina, aproxima o visitante da mesa, apresenta as três propostas e encerra com o convite para consultar disponibilidade. Scroll nativo, sem pinning ou sequestro de rolagem. Implementação GSAP + ScrollTrigger com gsap.matchMedia e limpeza de contexto.

| Element | Role | Starts | Duration | Motion | Relationship |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | Lead | Após load, somente no topo | 800ms | 28px + opacidade 0,65 → 1 | Chegada à cena |
| Texto/ações Hero | Support | 150ms depois | 800ms, intervalo 80ms | 14px + opacidade 0,65 → 1 | Sobrepõe título |
| Apresentação | Lead/Support | Topo a 86% da viewport | 750ms | 28/18px + opacidade 0,45 → 1 | Mesma composição |
| Foto da mesa/interiores | Lead | Topo a 85% | 1100ms | Recorte 5%/4% → sem recorte | Aproximação à fotografia |
| Fotos, desktop | Support | Durante a passagem pela viewport | Vinculada ao scroll | -4% → +4% vertical, scrub 0,7 | Continuidade da aproximação |
| Cards de menu | Lead | Topo a 86% | 750ms, intervalo 100ms desktop | 42px desktop / 18px estreito | Opções como conjunto |
| Documento/restaurante | Support | Topo a 86% | 750ms | 14/24px | Continuidade |
| Encerramento | Lead/Support | Topo a 86% | 750ms | 28px título / 14px CTA | Convite final |

Ease de entrada power3.out; parallax linear. Opacidade das entradas nunca parte de zero. Inline styles de entrada removidos ao terminar; tweens criados por callbacks registrados para reverter na limpeza. A fotografia tem overflow limitado e dimensões reservadas. Interações de foco completam animações de controles para não fazer o usuário esperar.

## Botões
Área de clique estável. Preenchimento interno em 420ms, deslocamento do label de 2px em 240ms, marca vetorial escala em 300ms. Pressão no label em 0,97; foco visível independente de hover. Hover limitado a ponteiro preciso. Curva CSS cubic-bezier(.23,1,.32,1).

## Acessibilidade e falhas
Conteúdo estático e links funcionam sem JS. Com prefers-reduced-motion, módulo GSAP não é inicializado e CSS remove transições e scroll suave. Mudança de preferência limpa contexto ativo; pagehide limpa a animação, pageshow restaura quando aplicável. Em tela estreita não há parallax, somente entradas curtas. Navegação por teclado impede novas entradas disparadas pelos callbacks. A regressão visual dessa preferência ainda precisa de captura válida.

## Verificação
Prévia observada em scroll no navegador: entradas dos menus e CTA; estados finais com opacidade 1 e transform none conferidos no DOM. Sem overflow em 1158 e 388 CSS px. Foto de mesa e interiores carregadas.

A captura automática Impeccable não inicia o Chromium por configuração SUID/sandbox; proteções não foram desativadas. Revisor de motion retornou recapture porque não existem sequências normais/reduced-motion comparáveis. Não há certificação de suavidade, FPS ou ausência de layout shift. Capturas estáticas e revisão manual não substituem esses ensaios.
