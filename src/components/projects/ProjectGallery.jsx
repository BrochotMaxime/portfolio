import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

function ProjectGallery({ screenshots = [], variant = "gallery" }) {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const featuredScreenshotIndex = screenshots.findIndex(
    (screenshot) => screenshot.featured,
  );

  const featuredScreenshot =
    featuredScreenshotIndex !== -1
      ? screenshots[featuredScreenshotIndex]
      : screenshots[0];

  const galleryScreenshots = screenshots.filter(
    (screenshot) => !screenshot.featured,
  );

  const selectedImage =
    selectedIndex !== null ? screenshots[selectedIndex] : null;

  const getScreenshotAlt = (screenshot) => t(screenshot.altKey);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const goToPreviousImage = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1,
    );
  }, [screenshots.length]);

  const goToNextImage = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1,
    );
  }, [screenshots.length]);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }

      if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, goToPreviousImage, goToNextImage]);

  if (screenshots.length === 0) {
    return null;
  }

  if (variant === "featured") {
    return (
      <>
        {featuredScreenshot && (
          <button
            className="project-gallery__featured-button"
            type="button"
            aria-label={t("projects.page.gallery.openImage", {
              description: getScreenshotAlt(featuredScreenshot),
            })}
            onClick={() => openLightbox(featuredScreenshotIndex)}
          >
            <img
              className="project-gallery__featured-image"
              src={featuredScreenshot.src}
              alt={getScreenshotAlt(featuredScreenshot)}
            />
          </button>
        )}

        {selectedImage &&
          createPortal(
            <ProjectLightbox
              selectedImage={selectedImage}
              selectedImageAlt={getScreenshotAlt(selectedImage)}
              selectedIndex={selectedIndex}
              screenshotsLength={screenshots.length}
              onClose={closeLightbox}
              onPrevious={goToPreviousImage}
              onNext={goToNextImage}
            />,
            document.body,
          )}
      </>
    );
  }

  return (
    <>
      {galleryScreenshots.length > 0 && (
        <div className="project-gallery">
          {galleryScreenshots.map((screenshot) => {
            const screenshotIndex = screenshots.findIndex(
              (image) => image.src === screenshot.src,
            );

            const screenshotAlt = getScreenshotAlt(screenshot);

            return (
              <button
                className="project-gallery__button"
                type="button"
                key={screenshot.src}
                aria-label={t("projects.page.gallery.openImage", {
                  description: screenshotAlt,
                })}
                onClick={() => openLightbox(screenshotIndex)}
              >
                <img
                  className="project-gallery__image"
                  src={screenshot.src}
                  alt={screenshotAlt}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {selectedImage &&
        createPortal(
          <ProjectLightbox
            selectedImage={selectedImage}
            selectedImageAlt={getScreenshotAlt(selectedImage)}
            selectedIndex={selectedIndex}
            screenshotsLength={screenshots.length}
            onClose={closeLightbox}
            onPrevious={goToPreviousImage}
            onNext={goToNextImage}
          />,
          document.body,
        )}
    </>
  );
}

function ProjectLightbox({
  selectedImage,
  selectedImageAlt,
  selectedIndex,
  screenshotsLength,
  onClose,
  onPrevious,
  onNext,
}) {
  const { t } = useTranslation();

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t("projects.page.gallery.dialogLabel")}
      onClick={onClose}
    >
      <div
        className="project-lightbox__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="project-lightbox__close"
          type="button"
          aria-label={t("projects.page.gallery.close")}
          onClick={onClose}
        >
          ×
        </button>

        <button
          className="project-lightbox__nav project-lightbox__nav--previous"
          type="button"
          aria-label={t("projects.page.gallery.previous")}
          onClick={onPrevious}
        >
          ‹
        </button>

        <img
          className="project-lightbox__image"
          src={selectedImage.src}
          alt={selectedImageAlt}
        />

        <button
          className="project-lightbox__nav project-lightbox__nav--next"
          type="button"
          aria-label={t("projects.page.gallery.next")}
          onClick={onNext}
        >
          ›
        </button>

        <p className="project-lightbox__counter">
          {selectedIndex + 1} / {screenshotsLength}
        </p>
      </div>
    </div>
  );
}

export default ProjectGallery;
