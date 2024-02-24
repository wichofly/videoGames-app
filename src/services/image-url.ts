import noImg from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImgUrl = (url: string) => {
  if (!url) return noImg;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImgUrl;

/**
 * const target = 'media/'; --> it is better to use it this way.
    const index = url.indexOf(target) + target.length;

    It was used this one:
    const index = url.indexOf('media/') + 'media/'.length;

 * The expression  url.slice(0, index) + 'crop/600/400/' + url.slice(index)  in the provided code snippet is used to construct a new URL by inserting the 'crop/600/400/' segment at a specific position within the original URL.  

 * Temporality fix to show the order of sorts. not all have images.
    if (!url) return ''; 
    Now it is fixed using "noImg"
 */
