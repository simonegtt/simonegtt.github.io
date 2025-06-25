# SIMONEGTT

Sito personale per la condivisione di progetti tecnici, contatti e risorse.  
Creato e mantenuto da SIMONEGTT.

---

## Struttura del sito

```
/
├── index.html               # Homepage
├── contatti.html           # Pagina contatti e bio
├── progetti.html           # Elenco dei progetti/articoli divisi per anno
├── progetti/               # Cartella con articoli singoli divisi per anno
│   ├── 2025/
│   │   └── esempio-progetto.html
│   └── 2024/
├── styles/
│   └── style.css           # Stili principali del sito
├── scripts/
│   └── main.js             # Script per sidebar, filtro progetti, ecc.
└── icons/                  # Icone social
```

---

## Funzionalità principali

- Navigazione con sidebar a scomparsa (hamburger menu)
- Modulo contatti con invio via Formspree
- Articoli/progetti organizzati per anno con filtro dinamico
- Responsive per mobile e desktop

---

## Contatti

La pagina `contatti.html` include:
- Icone social con link (GitHub, LinkedIn, Reddit, X, Instagram)
- Form contatto collegato a Formspree
- Bio personale

---

## Aggiunta di un nuovo progetto

1. Copia `progetti/template.html`
2. Incollalo nella cartella `progetti/[ANNO]/`
3. Rinominalo (es. `nome-progetto.html`)
4. Modifica titolo, data, contenuto
5. Aggiungi il link in `progetti.html`

---

## Tecnologie usate

- HTML + CSS + JavaScript Vanilla
- Google Fonts (Share Tech Mono)
- Font Awesome per icone social
- Formspree per modulo contatto

---

## Note

- Compatibile con hosting statico (GitHub Pages, Netlify, ecc.)
- Tutti i link e percorsi sono relativi per funzionare anche in locale
