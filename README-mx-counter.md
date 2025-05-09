# mx-counter

Faz a contagem animada de números com base em valores de início e fim definidos via atributos HTML personalizados `mx-data-*`.

---

## 🚀 Como usar

Adicione o script via CDN:

```html
<script defer src="https://cdn.jsdelivr.net/gh/mikex-dev/webflow-assets@latest/mx-counter.js?v=1"></script>
```

E o HTML:

```html
<div mx-data-counter="number" mx-data-start="0" mx-data-end="1000">0</div>
```

---

## ⚙️ Atributos disponíveis

| Atributo               | Tipo    | Exemplo | Descrição                            |
|------------------------|---------|---------|----------------------------------------|
| `mx-data-counter`      | string  | number  | Ativa o contador no elemento          |
| `mx-data-start`        | número  | 0       | Valor inicial da contagem             |
| `mx-data-end`          | número  | 1000    | Valor final da contagem               |

---

## 🎯 Funcionalidades

- Contagem suave com `requestAnimationFrame`
- Só inicia quando o elemento entra em tela
- Sem dependências externas
- Código leve e otimizado para Webflow ou páginas estáticas
