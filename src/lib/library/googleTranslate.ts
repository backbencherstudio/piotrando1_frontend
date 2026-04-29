export function smoothTranslate(lang: string) {
  const tryTranslate = () => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (!combo) {
      setTimeout(tryTranslate, 200);
      return;
    }


    document.body.classList.add("translating");
    combo.value = lang;
    combo.dispatchEvent(new Event("change", { bubbles: true }));


    setTimeout(() => {
      document.body.classList.remove("translating");
      // Check if translation applied, if not, retry dispatching the event
      if (!document.body.classList.toString().includes("translated")) {
        //     alert("Translation not applied, retrying");
        setTimeout(() => {
          combo.dispatchEvent(new Event("change", { bubbles: true }));
        }, 500);
      }
    }, 1000);
  };


  tryTranslate();
}
