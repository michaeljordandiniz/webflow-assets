# mx-rotate

Aplica uma animação de rotação contínua em qualquer elemento com atributos personalizados `mx-data-*`. A rotação só inicia quando o elemento entra na tela (lazy load via IntersectionObserver).

---

## 🚀 Como usar

Adicione o script via CDN:

```html
<script defer src="https://cdn.jsdelivr.net/gh/mikex-dev/webflow-assets@latest/mx-rotate.js?v=1"></script>
```

Depois, adicione o componente no HTML:

```html
<div
  mx-data-rotate="circle"
  mx-data-rotate-duration="12000"
  mx-data-rotate-delay="500"
  mx-data-rotate-ease="linear"
  mx-data-rotate-direction="normal"
  style="width:100px; height:100px; background:red; border-radius:50%;">
</div>
```

---

## ⚙️ Atributos disponíveis

| Atributo                     | Tipo          | Exemplo     | Descrição                                                             |
|-----------------------------|---------------|-------------|----------------------------------------------------------------------|
| `mx-data-rotate`            | `"circle"`    | circle      | Identifica o elemento para ativar a rotação                         |
| `mx-data-rotate-duration`   | milissegundos | `12000`     | Tempo de uma rotação completa                                       |
| `mx-data-rotate-delay`      | milissegundos | `500`       | Atraso antes da rotação começar                                     |
| `mx-data-rotate-ease`       | easing CSS    | `linear`    | Curva de aceleração. Ex: `ease`, `ease-in`, `linear`, etc.          |
| `mx-data-rotate-direction`  | CSS            | `reverse`   | Sentido da rotação (`normal`, `reverse`, `alternate`, etc.)         |

---

## 🎯 Funcionalidades

- Animação rotacional leve com CSS.
- Ativação apenas ao entrar na tela (otimizado com IntersectionObserver).
- Controle total via atributos HTML.
