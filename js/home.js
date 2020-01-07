var doc, bod, htm;
addEventListener("load", function() {
  doc = document;
  bod = doc.body;
  htm = doc.documentElement;
  addEventListener("scroll", function() {
    doc.querySelector(".list-wrapper").style.position =
      htm.scrollTop > 400 ? "absolute" : "fixed";
  });
});
