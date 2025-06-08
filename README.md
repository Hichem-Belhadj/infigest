# Infigest

[![Tauri](https://img.shields.io/badge/tauri-%23000000?style=flat&logo=tauri&logoColor=white)](https://tauri.app/)
[![Angular](https://img.shields.io/badge/angular-19-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Rust](https://img.shields.io/badge/rust-1.76.0-orange?style=flat&logo=rust&logoColor=white)](https://www.rust-lang.org/)

> Application de bureau développée avec Angular 19 pour le frontend et Tauri (Rust) pour le backend natif.  
> Pensée pour être légère, rapide et portable, tout en tirant parti de la puissance native de Rust.

---

## 🧰 Prérequis

### 📦 Installer Angular CLI (v16+ compatible avec Angular 19)

```bash
  npm install -g @angular/cli
```

### ⚙️ Installer Rust (via rustup)

```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  # Ou sous Windows : https://rustup.rs
```

> Assure-toi que `cargo` est bien dans ton `$PATH`.

### 🛠 Installer les dépendances Tauri

```bash
  cargo install tauri-cli
```

---

## 🚀 Lancer l'application en mode développement

```bash
  npm install
  npm run tauri:dev
```

Cela :
- lance Angular en mode développement (`ng serve`)
- puis démarre Tauri avec hot-reload (`tauri dev`)

---

## 📦 Compiler l'application (production)

```bash
  npm run build
  npm run tauri:build
```

Cela :
- génère un build Angular optimisé (`dist/infigest`)
- génère l'application native avec Tauri (`src-tauri/target/release`)

---

## 📁 Structure du projet

    infigest/
    ├── src/                 # Code source Angular
    ├── src-tauri/           # Backend natif Tauri (Rust)
    ├── package.json         # Scripts npm
    ├── tauri.conf.json      # Configuration Tauri
    └── README.md            # Documentation

---

## 🧪 Tests

```bash
  npm run test
```

---

## 📜 License

MIT

---
