const LAST_CHAPTER_STORAGE_KEY = "goku-den:last-chapter-id";

const isBrowser = () => typeof window !== "undefined" && !!window.localStorage;

const saveLastChapterId = (chapterId) => {
  if (!isBrowser() || !chapterId) {
    return;
  }

  window.localStorage.setItem(LAST_CHAPTER_STORAGE_KEY, String(chapterId));
};

const getLastChapterId = () => {
  if (!isBrowser()) {
    return null;
  }

  const chapterId = window.localStorage.getItem(LAST_CHAPTER_STORAGE_KEY);

  if (!chapterId || !/^\d+$/.test(chapterId)) {
    return null;
  }

  return chapterId;
};

export { saveLastChapterId, getLastChapterId };