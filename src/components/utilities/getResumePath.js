function getResumePath(language) {
  return language?.startsWith("fr")
    ? "/documents/maxime-brochot-resume-fr.pdf"
    : "/documents/maxime-brochot-resume-en.pdf";
}

export default getResumePath;
