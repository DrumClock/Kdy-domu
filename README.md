# Osobní píchačka ⏰

Jednoduchá webová appka (PWA), která spočítá, kdy můžeš odejít z práce — podle začátku směny, délky pracovní doby a pauzy na svačinu. Ukazuje živě, kolik ti ještě **zbývá**, nebo kolik už máš **přesčas**.

**▶️ Spustit appku: [drumclock.github.io/Kdy-domu](https://drumclock.github.io/Kdy-domu/)**

<p align="center">
  <img src="qr.png" alt="QR kód pro instalaci" width="200">
  <br>
  <sub>Naskenuj foťákem a nainstaluj do telefonu</sub>
</p>

---

## Co appka umí

- **Výpočet odchodu** ze zadaného začátku směny (začátek se bere z prvního Příchodu, nebo ho zadáš ručně jen pro výpočet).
- **Pracovní doba** na jedno ťuknutí: 6 h (zkrácená) nebo klasická 8 h / 7:30 / 7:00 (ranní / odpolední / noční).
- **Svačina** s nastavitelnou délkou a přepínačem **placená / neplacená**. Neplacená se z odpracované doby odečítá jen když je čistá práce **nad 6 h** (podle zákoníku práce).
- **Živý odpočet** — kolik zbývá (červeně) nebo kolik je přesčas (zeleně), aktualizace každou vteřinu.
- **[Píchačky](#píchačky)** — Příchod / Odchod (i přes NFC) evidují začátek, konec, přerušení a přesčas směny.
- **Typy dnů** — vedle běžné směny i **paragraf (§)**, **náhradní volno (NV)**, **nemoc**, **dovolená** (od–do) a **svátek**.
- **Historie** po měsících s úpravou, dodatečným dopsáním a exportem do CSV.
- **Konto přesčasů** — kumulativní banka napříč měsíci s ručním počátečním stavem; náhradní volno z ní čerpá.
- **Záloha** — kompletní export/import do JSON souboru (přenos na jiný telefon) a export do CSV pro Excel.
- **Připomínka do kalendáře** — vytvoří v telefonu událost na čas odchodu s upozorněním (funguje i při zavřené appce a zamčeném telefonu).
- **Zapamatování** — délka směny a nastavení svačiny se drží natrvalo.
- **[NFC](#nfc-štítek)** — přiložením telefonu k NFC štítku píchneš příchod nebo odchod.
- **Funguje offline** a jde nainstalovat na plochu jako běžná aplikace.
- **QR kód** pro rychlé sdílení a instalaci na cizím telefonu.
- **Nápověda** přímo v appce (ikona „?") — stručný přehled, jak vše používat.


---

## Náhledy

<p align="center">
  <img src="screenshot-app.png" alt="Hlavní obrazovka" width="230">
  &nbsp;&nbsp;
  <img src="screenshot-history.png" alt="Historie" width="230">
</p>
<p align="center">
  <img src="screenshot-help.png" alt="Nápověda" width="230">
  &nbsp;&nbsp;
  <img src="screenshot-qr.png" alt="Sdílecí stránka s QR kódem" width="230">
</p>

---

## Instalace na mobil

Otevři v prohlížeči adresu **https://drumclock.github.io/Kdy-domu/** (nebo naskenuj QR kód výše) a přidej si ji na plochu.

### Android (Chrome)
1. Otevři odkaz v **Chromu** (ne ve vestavěném prohlížeči jiné appky).
2. Menu **⋮** vpravo nahoře → **Přidat na plochu** / **Nainstalovat aplikaci**.
3. Potvrď. Appka se objeví na ploše s vlastní ikonou.

> Tip: někdy je ikonka instalace přímo v adresním řádku.

### iPhone / iPad (Safari)
1. Otevři odkaz v **Safari**.
2. Ťukni na tlačítko **Sdílet** (čtvereček se šipkou nahoru).
3. Zvol **Přidat na plochu** → **Přidat**.

---

## Instalace na PC

Funguje v **Chromu** a **Microsoft Edge** (Firefox a Safari na počítači instalaci PWA nepodporují).

### Google Chrome
1. Otevři **https://drumclock.github.io/Kdy-domu/**.
2. V adresním řádku klikni na ikonu instalace (monitor se šipkou dolů) → **Nainstalovat**.
3. Případně: menu **⋮** → **Odesílat, ukládat a sdílet** → **Nainstalovat stránku jako aplikaci**.

### Microsoft Edge
1. Otevři tu samou adresu.
2. Menu **…** → **Aplikace** → **Nainstalovat tento web jako aplikaci**.

Po instalaci se appka spustí ve vlastním okně bez adresního řádku a získá zástupce v nabídce Start / Launchpadu.

---

## Jak se počítá odchod

```
odchod = začátek + pracovní doba + neplacená pauza
```

Placená pauza se počítá jako práce, takže odchod **neposouvá**. Když výpočet přesáhne půlnoc, u rozpisu se zobrazí poznámka „(další den)".

**Příklad:** začátek 7:39, směna 8 h, svačina 0:30 neplacená → odchod **16:09**.

---

## Připomínka v kalendáři

V rozích nahoře jsou dvě ikonky: **kalendář** (vlevo) a **QR** (vpravo). Kalendář vytvoří v telefonu událost „Odchod domů 🏠" na spočítaný čas s upozorněním — díky tomu tě telefon upozorní, i když je appka zavřená a obrazovka zamčená.

- **Android:** stáhne se soubor `odchod-domu.ics` → otevřeš ho → kalendář nabídne přidání události.
- **iPhone:** rovnou se nabídne přidání do kalendáře.
- **PC:** `.ics` otevřeš v Google / Outlook / Apple kalendáři.

Upozornění je v souboru nastavené **na čas události**. Pokud ti kalendář přidá vlastní výchozí připomínku (např. Google 30 min předem), vypni ji v nastavení kalendáře (výchozí připomínky účtu).

---

## NFC štítek

<img src="nfc.png" alt="NFC" width="72" align="left">

Appka rozumí parametrům v adrese, takže přiložením telefonu k NFC štítku rovnou píchneš příchod nebo odchod:

<br clear="left">

| URL na štítku | Co udělá |
| --- | --- |
| `https://drumclock.github.io/Kdy-domu/?prichod` | Píchne **Příchod** (začátek směny / návrat z přerušení) |
| `https://drumclock.github.io/Kdy-domu/?odchod` | Píchne **Odchod** (přerušení / konec směny) |

Po přiložení se píchnutí zapíše, appka aktualizuje stav a parametr se z adresy odstraní (refresh ho už nezopakuje). Ideální je jeden štítek `?prichod` u příchodu a druhý `?odchod` u odchodu.

**Jak štítek zapsat:** pořiď si prázdný NFC tag a v appce jako **NFC Tools** (Android) zapiš na tag zvolenou URL jako záznam typu *URL/URI*. iPhone umí NFC URL číst sám; k zápisu použij podobnou appku. Štítek pak nalep třeba ke skříňce nebo píchačkám.

---

## Píchačky

Appka funguje jako jednoduché píchačky včetně přerušení.

**Ovládání** — tlačítka **Příchod** (zelené) a **Odchod** (červené), nebo NFC štítky `?prichod` / `?odchod`. Pod tlačítky běží živý stav: *„V práci od 7:40 · odpracováno 2:15"* nebo *„Konec 16:10 · odpracováno 8:00 · přesčas +0:00"*.

**Logika dne**
- První **Příchod** = začátek směny (rovnou vyplní i „Začátek směny" v plánovači).
- Každá dvojice **Odchod → Příchod** uprostřed = **přerušení**.
- Poslední **Odchod** = konec směny.
- Odpracováno = (konec − začátek) − přerušení − neplacená svačina; přesčas = odpracováno − zvolená délka směny.
- **Svačina** se odečítá jen když je čistá práce **nad 6 h** (zákoník práce). Do 6:00 včetně se neodečítá, od 6:01 se odečte celá (např. 6:01 → 5:31).

**Paragraf (§) a náhradní volno (NV)** — v editaci dne má každý **Odchod** přepínače **§** a **NV** (vzájemně se vylučují):
- **§ paragraf** — u přerušení = placená pauza; u posledního Odchodu = zbytek směny je paragraf. Do odpracované doby se **nepočítá**, ale **zaplní plán** (netvoří přesčas).
- **NV náhradní volno** — u přerušení nebo posledního Odchodu. **Přičte se do odpracované doby** (doplní den do plné směny) a **odečte z přesčasu**.

**Celodenní typy** (v editaci přes „Typ dne", nebo § / ✚ na hlavní obrazovce pro dnešek):
- **Paragraf**, **Nemoc**, **Dovolená**, **Svátek** — nepočítají se do odpracováno ani přesčasu. **Dovolená a Nemoc** jdou zadat **od–do** (soboty a neděle se přeskočí).
- **Náhradní volno (celý den)** — přičte délku směny do odpracováno a odečte z přesčasu.

Tlačítka se sama zapínají/vypínají podle stavu, takže se nedá přihlásit dvakrát ani odejít bez přihlášení.

**Přes půlnoc** — noční směna se páruje správně: píchnutí po půlnoci se přiřadí k rozjeté směně, ne k novému dni.

**Historie** (ikona hodin nahoře uprostřed) se otevře jako panel přes celou výšku: **nahoře** přepínač měsíce (◀ ▶) se souhrnem *Odpracováno* a *Přesčas* za zvolený měsíc, **uprostřed** scrollovací seznam dní, **dole** tlačítka. Listovat jde i do budoucích měsíců (kde máš záznam, např. dovolenou).

- Každý den má vpravo barevné **ikony** podle obsahu: **§** (paragraf), **NV** (náhradní volno), křížek (nemoc), sluníčko (dovolená), kalendář s fajfkou (svátek).
- **Úprava záznamu** — tužka ✎ otevře editor: **typ dne** (dlaždice s ikonami), časy a typ píchnutí, datum, pracovní doba, svačina, § a NV.
- **Dodatečné dopsání** — tlačítko ➕ v záhlaví (vybereš datum a typ).
- Záznamy jde jednotlivě mazat (✕). **Vymazat měsíc** smaže jen právě zobrazený měsíc.

**Konto přesčasů** — pod souhrnem je karta **Konto ke konci [měsíce]** = kumulativní součet všech přesčasů až do konce zobrazeného měsíce plus ruční **počáteční stav konta** (zadáš třeba `+12:00`, klidně i mínus). Přesčas konto zvyšuje, náhradní volno z něj čerpá — a protože je součet průběžný, **NV v jednom měsíci ubere z konta našetřeného v jiném**. Konto může jít i do mínusu.

**Záloha a export** (tlačítko **Záloha** v Historii → stránka Záloha):
- **Export CSV** — přehled dnů pro Excel (`pichacky.csv`).
- **Záloha JSON ↓** — kompletní záloha (záznamy + konto + nastavení) do `pichacky-zaloha-RRRR-MM-DD.json`.
- **Obnovit ↑** — načte JSON a nabídne **Sloučit** (přidá záznamy) nebo **Nahradit** (přepíše vše). Ideální pro přenos na jiný telefon.

Poznámky:
- Data jsou **jen v tvém telefonu** (`localStorage`) — osobní přehled, ne oficiální evidence pro zaměstnavatele. Přesnost odpovídá tomu, kdy píchneš.
- Z odpracovaného času se odečítá **neplacená svačina** (podle nastavení „Svačina"). Nový den si tuto hodnotu uloží u sebe; starší dny bez uložené hodnoty se řídí aktuálním nastavením. V editaci dne jde svačinu i placená/neplacená nastavit **napevno** pro konkrétní den.
- Přesčas se počítá proti délce směny zvolené v době píchnutí.

---

## Technické detaily

Appka je čistá **PWA** bez frameworků — jeden HTML soubor s vloženým CSS a JavaScriptem, plus manifest a service worker pro offline režim. Data se ukládají lokálně v prohlížeči (`localStorage`).

| Soubor | Popis |
| --- | --- |
| `index.html` | Samotná aplikace (HTML + CSS + JS) |
| `manifest.json` | Metadata PWA (název, ikony, barvy) |
| `sw.js` | Service worker — offline cache |
| `sdilet.html` | Sdílecí stránka s QR kódem a návodem |
| `napoveda.html` | Nápověda k aplikaci |
| `zaloha.html` | Záloha/obnova (JSON) a export CSV |
| `qr.png` | QR kód s adresou aplikace |
| `nfc.png` | Ikonka NFC pro README |
| `screenshot-app.png`, `screenshot-history.png`, `screenshot-help.png`, `screenshot-qr.png` | Náhledy do README |
| `icon-192.png`, `icon-512.png`, `icon-maskable.png` | Ikony aplikace |

### Vlastní hosting (GitHub Pages)
1. Nahraj soubory do kořene repozitáře.
2. **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Za chvíli appka běží na `https://<uživatel>.github.io/<repo>/`.

Podmínka pro instalaci PWA je **https** — to GitHub Pages zajišťuje zdarma.

---

## Omezení

Jako webová appka **sama neumí zvukový budík na pozadí** — pípnutí přímo v appce by zaznělo jen při zapnuté appce s rozsvícenou obrazovkou. Na spolehlivé upozornění při zamčeném telefonu proto slouží **připomínka v kalendáři** (viz výše), kterou zajistí systémový kalendář.

---

<sub>Vytvořeno jako hobby projekt. 🙂</sub>
