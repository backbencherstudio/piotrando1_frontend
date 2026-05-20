export function smoothTranslate(lang: string) {
  let attempts = 0;

  const tryTranslate = () => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;

    if (!combo) {
      if (attempts++ < 10) setTimeout(tryTranslate, 200);
      return;
    }

    document.body.style.opacity = "0.7";

    combo.value = lang;
    combo.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 300);
  };

  tryTranslate();
}