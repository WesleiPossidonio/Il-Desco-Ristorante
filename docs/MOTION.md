# Movimento

Uma única composição animada: os três menus ao entrar na área visível em desktop. Propósito: apresentar as três propostas como um conjunto na primeira visita. GSAP: deslocamento de 12px, opacidade inicial 0,92, duração 240ms, stagger 60ms e power3.out. Conteúdo nunca parte de estado invisível. Propriedades inline limpas ao terminar.

Carregamento: módulo principal local pequeno; GSAP carregado sob demanda apenas na interseção. Sem ScrollTrigger, sem animação no Hero ou na imagem LCP. Sem animação em viewport até 760px ou após navegação por teclado. gsap.matchMedia reverte o movimento se a preferência mudar; pagehide limpa contexto/observador. Falha no carregamento da animação não interfere em links ou conteúdo.

Botões: CSS transition, transform 160ms no pressionamento, scale 0,98. Preferência reduced-motion elimina o deslocamento/scale. Hover limitado a dispositivos com hover e ponteiro preciso.

Build usa esbuild somente para módulos JS locais minificados com divisão do import dinâmico. Não muda HTML/Tailwind nem introduz framework ou backend.
