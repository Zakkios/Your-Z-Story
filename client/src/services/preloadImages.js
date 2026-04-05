const preloadImages = (imageUrls) => {
    return Promise.all(
        imageUrls.map((url) => {
            if (!url) return Promise.resolve();

            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
            });
        })
    );
}

export default preloadImages;