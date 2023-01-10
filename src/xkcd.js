(function () {
  window.addEventListener(
    "load",
    () => {
      const titleElement = document.querySelector("#comic [title]");
      if (titleElement) {
        const title = titleElement.title;
        let p = document.createElement("p");
        p.innerText = title;
        document.querySelector("#comic").append(p);
        const mystyle = {
          "font-variant": "none",
          background: "lightgray",
          padding: "10px",
        };
        Object.assign(p.style, mystyle);
      }
      const currentComic = document.querySelector(
        "div#middleContainer.box > a"
      );
      if (currentComic) {
        let uriPath = currentComic.text.split("/");
        let currentComicNumber = 0;
        for (let i = uriPath.length - 1; i >= 0; --i) {
          let n = parseInt(uriPath[i]);
          if (!isNaN(n)) {
            currentComicNumber = n;
            break;
          }
        }
        let div = document.createElement("div");
        let a = document.createElement("a");
        let link = document.createTextNode(
          "https://www.explainxkcd.com/wiki/index.php/" + currentComicNumber
        );
        a.appendChild(link);
        a.setAttribute(
          "href",
          "https://www.explainxkcd.com/wiki/index.php/" + currentComicNumber
        );
        div.appendChild(a);
        document.querySelector("#comic").append(div);
      }
    },
    false
  );
})();

// export function add(a: number, b: number): number {
//   return a+b;
// }
