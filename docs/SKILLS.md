# Skills utilizadas

Coleções instaladas localmente em .agents/skills: Emil Kowalski (20 skills), Intent (18), GSAP (8) e Impeccable (1). As fontes e commits exatos estão em skills-lock.json. Instalação por cópia dos diretórios de skill dos repositórios indicados; sem hooks automáticos ou plugins de conta. Os arquivos locais não são incorporados ao bundle do site.

Usadas nesta etapa: emil-design-eng/animate, intent/include, impeccable (context e polish) e gsap-core/gsap-performance/gsap-scrolltrigger/gsap-timeline e Emil choreograph. Contexto de UX em context-il-desco.md; movimento em MOTION.md.

| Before | After | Why |
| --- | --- | --- |
| “Richiedi disponibilità” | “Richiedi disponibilità su WhatsApp” | A pessoa sabe qual aplicativo abre antes de sair da página. |
| Pratos em 0,95rem | Pratos em 1rem | Leitura mais confortável sem reduzir o conteúdo oficial. |
| Tracking -0,055em | Tracking -0,035em | Reduzir compressão das letras serifadas. |
| Sem feedback ao pressionar | Scale 0,98 em 160ms | Confirmar o pressionamento sem atrasar a navegação. |
| Movimento restrito aos cards | Sequência editorial com ScrollTrigger, fotografias e encerramento | Reforçar a aproximação à mesa solicitada pelo responsável. |

Impeccable context executado. Detector executado uma vez nos arquivos alterados: aviso flat-type-hierarchy no template, porque tentou resolver assets/style.css dentro de templates/. O CSS real é compilado em dist/assets/style.css; hierarquia precisa ser avaliada no resultado renderizado. Não se trata de auditoria aprovada de acessibilidade ou performance.

As orientações que exigiriam redesenho ou alterações de stack não foram aplicadas: o briefing e a autorização do responsável prevalecem.

Revisão premium: animate/adapt/craft-floor de Impeccable aplicados; fontes e paleta aprovadas preservadas apesar dos avisos estilísticos do detector. Kicker redundante do restaurante removido. Captura automática indisponível por sandbox do Chromium; motion reviewer retornou recapture para evidência normal/reduced-motion, sem certificar suavidade.
